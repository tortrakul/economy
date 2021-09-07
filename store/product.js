const state = () => ({
  list: [],
  row: null,
  meta: {
    from_date: null,
    to_date: null,
    search: null,
    per_page: 12
  }
})

const getters = {
  list: state => state.list,
  row: state => state.row
}

const actions = {
  async all ({ commit, state }, meta) {
    let params = { ...state.meta, ...meta }
    commit('meta', params)

    await this.$axios.$get('/transactions', { params }).then(
      ({ data, meta }) => {
        commit('all', data)
        commit('meta', { total: meta.total })
      }
    )
  },
  async find ({ commit }, id) {
    await this.$axios.$get(`/transactions/${id}`).then(
      ({ data }) => commit('find', data)
    )
  },
  async create (ctx, payload) {

    let form = new FormData
    form.append('farm_id', payload.farm_id)
    form.append('name', payload.name)
    form.append('amount', payload.amount)
    form.append('unit', payload.unit)
    form.append('unit_price', payload.unit_price)
    form.append('date', payload.date)
    form.append('total', payload.total)
    form.append('description', payload.description)
    form.append('tags[0]', payload.tag)
    form.append('file_1', payload.file1)
    form.append('file_2', payload.file2)
    form.append('file_3', payload.file3)
    form.append('file_4', payload.file4)

    const config = {
      headers: { 'Content-Type': 'multipart/form-data' }
    }

    await this.$axios.$post('/transactions', form, config)
  },
  async update (ctx, payload) {
    payload.tags = [payload.tag]
    await this.$axios.$patch(`/transactions/${payload.id}`, payload)
  },
  async delete (ctx, id) {
    await this.$axios.$delete(`/transactions/${id}`)
  }
}

const mutations = {
  all: (state, payload) => {
    state.list = payload
  },
  find: (state, payload) => {
    state.row = payload
  },
  meta: (state, payload) => {
    Object.assign(state.meta, payload)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
