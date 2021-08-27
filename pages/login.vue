<template>
    <div class="card card-body">
        <h4 class="card-title font-weight-bold text-center">เข้าสู่ระบบ</h4>

        <div class="form-group row">
            <label class="col-lg-2 col-form-label">ชื่อผู้ใช้งาน</label>
            <div class="col-lg-10">
                <input type="text" class="form-control" />
            </div>
        </div>

        <div class="form-group row">
            <label class="col-lg-2 col-form-label">รหัสผู้ใช้งาน</label>
            <div class="col-lg-10">
                <input type="password" class="form-control" />
            </div>
        </div>

        <div class="form-group row">
            <div class="offset-lg-2 col-lg-10">
                <label>
                    <input type="checkbox" /> จำฉันไว้ในระบบ
                </label>
            </div>
        </div>

        <div class="form-group row">
            <div class="offset-lg-2 col-lg-10">
                <button class="btn btn-gradient-primary px-4">เข้าสู่ระบบ</button>
            </div>
        </div>

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
    layout: 'auth'
}
</script>
