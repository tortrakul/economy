export const actions = {
  async upload (ctx, payload) {

    let form = new FormData
    form.append('media', payload.media)
    form.append('id', payload.id)
    form.append('model', payload.model)
    form.append('index', payload.index)

    const config = {
      headers: { 'Content-Type': 'multipart/form-data' }
    }

    await this.$axios.$post('/media', form, config)
  },

  async delete (ctx, id) {
    await this.$axios.$delete(`/media/${id}`)
  }
}
