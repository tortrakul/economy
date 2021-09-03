<template>
    <div class="card card-body">
        <h4 class="card-title font-weight-bold text-center">รีเซ็ตรหัสผ่าน</h4>

        <div class="form-group row">
            <label class="col-lg-2 col-form-label">อีเมล</label>
            <div class="col-lg-10">
                <input type="text" class="form-control" />
            </div>
        </div>

        <div class="form-group row">
            <div class="offset-lg-2 col-lg-10">
                <router-link to="/reset-password" class="btn btn-gradient-primary px-4">ส่งลิงก์รีเซ็ตรหัสผ่าน</router-link>
            </div>
        </div>

        <hr />

        <div class="row">
            <div class="offset-lg-2 col-lg-10 d-flex flex-column">
                <router-link to="/login" class="py-1">เข้าสู่ระบบ</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    auth: 'guest',
    layout: 'auth'
}
</script>
