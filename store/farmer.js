const state = () => ({
  list: [],
  row: null,
  meta: {
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

    await this.$axios.$get('/farmers', { params }).then(
      ({ data, meta }) => {
        commit('all', data)
        commit('meta', { total: meta.total })
      }
    )
  },
  async find ({ commit }, id) {
    await this.$axios.$get(`/farmers/${id}`).then(
      ({ data }) => commit('find', data)
    )
  },
  async create (ctx, payload) {

    let form = new FormData
    form.append('farm_id', payload.farm_id)
    form.append('name', payload.name)
    form.append('citizen_id', payload.citizen_id)
    form.append('address', payload.address)
    form.append('sub_district_id', payload.sub_district_id)
    form.append('zip_code', payload.zip_code)
    form.append('birth_date', payload.birth_date)
    form.append('tel', payload.tel)
    form.append('email', payload.email)
    form.append('promptpay', payload.promptpay)
    form.append('line', payload.line)
    form.append('file_1', payload.file1)

    const config = {
      headers: { 'Content-Type': 'multipart/form-data' }
    }

    await this.$axios.$post('/farmers', form, config)
  },
  async update (ctx, payload) {
    await this.$axios.$patch(`/farmers/${payload.id}`, payload)
  },
  async delete (ctx, id) {
    await this.$axios.$delete(`/farmers/${id}`)
  },
  async attachFarm (ctx, { id, farmId}) {
    await this.$axios.$post(`/farmers/${id}/attach-farm`, { farm_id: farmId })
  },
  async detachFarm (ctx, { id, farmId}) {
    await this.$axios.$post(`/farmers/${id}/detach-farm`, { farm_id: farmId })
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
