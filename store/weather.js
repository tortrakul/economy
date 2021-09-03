const api = 'https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?lang=th&units=metric&q=Pa+Sang&appid='

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
    await this.$axios.$get(api + process.env.openWeatherApiKey).then(
        response => commit('fetch', response)
    )
  }
}

export const mutations = {
  fetch: (state, payload) => {
    state.description = payload.weather[0].description
    state.temp = payload.main.temp
    state.humidity = payload.main.humidity
    state.pressure = payload.main.pressure * 0.000986923267
    state.wind = payload.wind.speed * 3.6
  }
}
