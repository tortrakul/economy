export const state = () => ({
  provinces: [],
  districts: [],
  subDistricts: [],
})

export const actions = {
  async provinces ({ commit }) {
    await this.$axios.$get('/provinces').then(
      data => commit('provinces', data)
    )
  },
  async districts ({ commit }, province) {
    await this.$axios.$get(`/districts-of/${province}`).then(
      data => commit('districts', data)
    )
  },
  async subDistricts ({ commit }, district) {
    await this.$axios.$get(`/sub-districts-of/${district}`).then(
      data => commit('subDistricts', data)
    )
  }
}

export const mutations = {
  provinces: (state, payload) => {
    state.provinces = payload
  },
  districts: (state, payload) => {
    state.districts = payload
  },
  subDistricts: (state, payload) => {
    state.subDistricts = payload
  }
}
