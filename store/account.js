export const actions = {

  async register (ctx, payload) {

    let form = new FormData
    form.append('name', payload.name)
    form.append('birth_date', payload.birth_date)
    form.append('citizen_id', payload.citizen_id)
    form.append('tel', payload.tel)
    form.append('line', payload.line)
    form.append('address', payload.address)
    form.append('sub_district_id', payload.sub_district_id)
    form.append('zip_code', payload.zip_code)
    form.append('avatar', payload.avatar)
    form.append('email', payload.email)
    form.append('username', payload.username)
    form.append('password', payload.password)

    const config = {
      headers: { 'Content-Type': 'multipart/form-data' }
    }

    return await this.$axios.$post('/register', form, config).then(
      response => response
    )
  }

}
