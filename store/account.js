export const actions = {

  async register (ctx, payload) {
    return await this.$axios.$post('/register', payload).then(
      response => response
    )
  }

}
