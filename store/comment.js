const state = () => ({
  list: [],
  row: null,
  meta: {
    from_date: null,
    to_date: null,
    search: null
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

    await this.$axios.$get('/comments', { params }).then(
      ({ data, meta }) => {
        commit('all', data)
        commit('meta', { total: meta.total })
      }
    )
  },
  async find ({ commit }, id) {
    await this.$axios.$get(`/comments/${id}`).then(
      ({ data }) => commit('find', data)
    )
  },
  async create (ctx, payload) {

    let form = new FormData
    form.append('id', payload.id)
    form.append('model', payload.model)
    form.append('body', payload.body)

    if (payload.file) {
      form.append('file', payload.file)
    }

    const config = {
      headers: { 'Content-Type': 'multipart/form-data' }
    }

    await this.$axios.$post('/comments', form, config)
  },
  async update (ctx, payload) {
    await this.$axios.$patch(`/comments/${payload.id}`, payload)
  },
  async delete (ctx, id) {
    await this.$axios.$delete(`/comments/${id}`)
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
