const api = 'https://api.weatherapi.com/v1/current.json?q=Pa+Sang&key='

export const state = () => ({
  description: '',
  temp: 0,
  humidity: 0,
  pressure: 0,
  sun: 0,
  wind: 0
})

export const actions = {
  async fetch ({ commit }, payload) {
    await this.$axios.$get(api + process.env.weatherApiKey).then(
        response => commit('fetch', response)
    )
  }
}

export const mutations = {
  fetch: (state, payload) => {
    state.description = payload.current.condition.text
    state.temp = payload.current.temp_c
    state.humidity = payload.current.humidity
    state.pressure = payload.current.pressure_mb * (1 / 1013.25)
    state.wind = payload.current.wind_kph
  }
}
