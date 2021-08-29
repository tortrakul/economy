export const actions = {

  async register (ctx, payload) {
    return await this.$axios.$post('http://localhost:4000/api/register', payload).then(
      response => response
    )
  }

}
