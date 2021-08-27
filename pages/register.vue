<template>
    <div>
        <div class="d-flex justify-content-end">
            <a class="btn btn-light">
                <span class="material-icons-outlined">power_settings_new</span>
                ลงชื่อเข้าใช้
            </a>
        </div>

        <hr />

        <div class="card card-body">
            <h4 class="card-title font-weight-bold text-center">ลงทะเบียนเกษตรกร</h4>

            <h5 class="catd-title mb-0">ข้อมูลส่วนตัว</h5>

            <hr />

            <div class="form-group row">
                <label class="col-lg-2 col-form-label">ชื่อ - นามสกุล</label>
                <div class="col-lg-10">
                    <input type="text" class="form-control" />
                </div>
            </div>

            <div class="form-group row">
                <label class="col-lg-2 col-form-label">วัน เดือน ปีเกิด</label>
                <div class="col-lg-10">
                    <b-form-datepicker />
                </div>
            </div>

            <div class="form-group row">
                <label class="col-lg-2 col-form-label">เลขประจำตัวประชาชน</label>
                <div class="col-lg-10">
                    <input type="text" class="form-control" />
                </div>
            </div>

            <div class="form-group row">
                <label class="col-lg-2 col-form-label">เบอร์โทรศัพท์</label>
                <div class="col-lg-10">
                    <input type="text" class="form-control" />
                </div>
            </div>

            <div class="form-group row">
                <label class="col-lg-2 col-form-label">ไลน์ไอดี</label>
                <div class="col-lg-10">
                    <input type="text" class="form-control" />
                </div>
            </div>

            <h5 class="catd-title mt-5 mb-0">ที่อยู่</h5>

            <hr />

            <div class="form-group row">
                <label class="col-lg-2 col-form-label">ที่อยู่</label>
                <div class="col-lg-10">
                    <input type="text" class="form-control" />

                    <div class="row mt-3">
                        <div class="col-lg-6">
                            <select class="form-control mb-3">
                                <option disabled selected>ตำบล</option>
                            </select>
                        </div>

                        <div class="col-lg-6">
                            <select class="form-control mb-3">
                                <option disabled selected>อำเภอ</option>
                            </select>
                        </div>

                        <div class="col-lg-6">
                            <select class="form-control mb-3">
                                <option disabled selected>จังหวัด</option>
                            </select>
                        </div>

                        <div class="col-lg-6">
                            <input type="text" class="form-control mb-3" placeholder="รหัสไปรษณีย์" />
                        </div>
                    </div>
                </div>
            </div>

            <h5 class="catd-title mt-5 mb-0">บัญชีผู้ใช้งาน</h5>

            <hr />

            <div class="form-group row">
                <label class="col-lg-2 col-form-label">รูปภาพประจำตัว</label>
                <div class="col-lg-10">
                    <div class="custom-file">
                        <input type="file" class="custom-file-input" id="profile">
                        <label class="custom-file-label" for="profile">เลือกไฟล์</label>
                    </div>
                </div>
            </div>

            <div class="form-group row">
                <label class="col-lg-2 col-form-label">อีเมล</label>
                <div class="col-lg-10">
                    <input type="text" class="form-control" />
                </div>
            </div>

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
                <label class="col-lg-2 col-form-label">ยืนยันรหัสผู้ใช้งาน</label>
                <div class="col-lg-10">
                    <input type="password" class="form-control" />
                </div>
            </div>

            <div class="mb-5"></div>

            <div class="form-group text-center">
                <label>
                    <input type="checkbox" /> ยอมรับข้อเสนอในการสมัครสมาชิก
                </label>
            </div>

            <div class="form-group text-center">
                <button class="btn btn-default">ยกเลิก</button>
                <button class="btn btn-gradient-primary px-4">บันทึก</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    layout: 'auth'
}
</script>
