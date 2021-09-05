export const state = () => ({
    months: ['', 'มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'],
    month: 0,
    year: 0,
    farmerCount: 0,
    farmCount: 0,
    farmerFarmAverage: 0,
    income: 0,
    expense: 0,
    total: 0,
    monthlyIncome: [],
    topIncomes: [],
    topExpenses: []
})

export const getters = {
  parsedMonth: state => {
    return state.months[state.month]
  },
  parsedYear: state => {
    return state.year + 543
  }
}

export const actions = {
  async get ({ commit }, payload) {
    await this.$axios.get('dashboard').then(
      ({ data }) => commit('get', data.data)
    )
  }
}

export const mutations = {
  get: (state, payload) => {
    state.month = payload.month
    state.year = payload.year
    state.farmerCount = payload.farmer_count
    state.farmCount = payload.farm_count
    state.farmerFarmAverage = payload.farmer_farm_average
    state.income = payload.income
    state.expense = payload.expense
    state.total = payload.total
    state.monthlyIncome = payload.monthly_income
    state.topIncomes = payload.top_incomes
    state.topExpenses = payload.top_expenses
  }
}
