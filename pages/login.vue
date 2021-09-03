<template>
    <div class="card card-body">
        <h4 class="card-title font-weight-bold text-center">เข้าสู่ระบบ</h4>

        <form @submit.prevent="onSubmit">
            <div class="form-group row">
                <label class="col-lg-2 col-form-label">ชื่อผู้ใช้งาน</label>
                <div class="col-lg-10">
                    <input v-model="email" type="text" class="form-control" />
                </div>
            </div>

            <div class="form-group row">
                <label class="col-lg-2 col-form-label">รหัสผู้ใช้งาน</label>
                <div class="col-lg-10">
                    <input v-model="password" type="password" class="form-control" />
                </div>
            </div>

            <div class="form-group row">
                <div class="offset-lg-2 col-lg-10">
                    <button class="btn btn-gradient-primary px-4" type="submit">เข้าสู่ระบบ</button>
                </div>
            </div>
        </form>

        <hr />

        <div class="row">
            <div class="offset-lg-2 col-lg-10 d-flex flex-column">
                <a href="#" class="py-1">ลงทะเบียนเกษตรกร</a>
                <a href="#" class="py-1">ลืมรหัสผ่าน</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    auth: 'guest',
    layout: 'auth',
    data: () => ({
        email: '',
        password: ''
    }),
    methods: {
        async onSubmit () {
            try {
                await this.$auth.loginWith('local', {
                    data: { email: this.email, password: this.password, device_name: '-' }
                })

                this.$router.push('/')
            } catch (e) {
                this.$bvToast.toast('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง', {
                    title: 'เกิดข้อผิดพลาด',
                    toaster: 'b-toaster-bottom-center',
                    variant: 'danger'
                })
            }
        }
    }
}
</script>
