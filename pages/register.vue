<template>
    <div>
        <div class="d-flex justify-content-end">
            <a class="btn btn-light">
                <span class="material-icons-outlined">power_settings_new</span>
                ลงชื่อเข้าใช้
            </a>
        </div>

        <hr />

        <form @submit.prevent="onSubmit">
            <div class="card card-body">
                <h4 class="card-title font-weight-bold text-center">ลงทะเบียนเกษตรกร</h4>

                <h5 class="catd-title mb-0">ข้อมูลส่วนตัว</h5>

                <hr />

                <div class="form-group row">
                    <label class="col-lg-2 col-form-label">ชื่อ - นามสกุล</label>
                    <div class="col-lg-10">
                        <input v-model="name" type="text" class="form-control" :class="{ 'is-invalid': $v.name.$error }" />
                        <div v-if="!$v.name.required" class="invalid-feedback">กรุณากรอก ชื่อ - นามสกุล</div>
                    </div>
                </div>

                <div class="form-group row">
                    <label class="col-lg-2 col-form-label">วัน เดือน ปีเกิด</label>
                    <div class="col-lg-10">
                        <b-form-datepicker v-model="birthDay" :class="{ 'is-invalid': $v.birthDay.$error }" />
                        <div v-if="!$v.birthDay.required" class="invalid-feedback">กรุณากรอก วัน เดือน ปีเกิด</div>
                    </div>
                </div>

                <div class="form-group row">
                    <label class="col-lg-2 col-form-label">เลขประจำตัวประชาชน</label>
                    <div class="col-lg-10">
                        <input v-model="id" type="text" class="form-control" :class="{ 'is-invalid': $v.id.$error }" />
                        <div v-if="!$v.id.required" class="invalid-feedback">กรุณากรอก เลขประจำตัวประชาชน</div>
                    </div>
                </div>

                <div class="form-group row">
                    <label class="col-lg-2 col-form-label">เบอร์โทรศัพท์</label>
                    <div class="col-lg-10">
                        <input v-model="tel" type="text" class="form-control" :class="{ 'is-invalid': $v.tel.$error }" />
                        <div v-if="!$v.tel.required" class="invalid-feedback">กรุณากรอก เบอร์โทรศัพท์</div>
                    </div>
                </div>

                <div class="form-group row">
                    <label class="col-lg-2 col-form-label">ไลน์ไอดี</label>
                    <div class="col-lg-10">
                        <input v-model="lineID" type="text" class="form-control" :class="{ 'is-invalid': $v.lineID.$error }" />
                        <div v-if="!$v.lineID.required" class="invalid-feedback">กรุณากรอก ไลน์ไอดี</div>
                    </div>
                </div>

                <h5 class="catd-title mt-5 mb-0">ที่อยู่</h5>

                <hr />

                <div class="form-group row">
                    <label class="col-lg-2 col-form-label">ที่อยู่</label>
                    <div class="col-lg-10">
                        <input v-model="address" type="text" class="form-control" :class="{ 'is-invalid': $v.address.$error }" />
                        <div v-if="!$v.address.required" class="invalid-feedback">กรุณากรอก ที่อยู่</div>

                        <div class="row mt-3">
                            <div class="col-lg-6">
                                <div class="form-group">
                                    <select v-model="province" @change="fetchDistricts(province)" class="form-control" :class="{ 'is-invalid': $v.province.$error }">
                                        <option disabled :value="null">จังหวัด</option>
                                        <option v-for="p in provinces" :value="p.id" :key="p.id">{{ p.name }}</option>
                                    </select>
                                    <div v-if="!$v.province.required" class="invalid-feedback">กรุณากรอก จังหวัด</div>
                                </div>
                            </div>

                            <div class="col-lg-6">
                                <div class="form-group">
                                    <select v-model="district" @change="fetchSubDistricts(district)" class="form-control" :disabled="!districts.length" :class="{ 'is-invalid': $v.district.$error }">
                                        <option disabled :value="null">อำเภอ</option>
                                        <option v-for="d in districts" :value="d.id" :key="d.id">{{ d.name }}</option>
                                    </select>
                                    <div v-if="!$v.district.required" class="invalid-feedback">กรุณากรอก อำเภอ</div>
                                </div>
                            </div>

                            <div class="col-lg-6">
                                <div class="form-group">
                                    <select v-model="subDistrict" class="form-control" :disabled="!subDistricts.length" :class="{ 'is-invalid': $v.subDistrict.$error }">
                                        <option disabled :value="null">ตำบล</option>
                                        <option v-for="sd in subDistricts" :value="sd.id" :key="sd.id">{{ sd.name }}</option>
                                    </select>
                                    <div v-if="!$v.subDistrict.required" class="invalid-feedback">กรุณากรอก ตำบล</div>
                                </div>
                            </div>

                            <div class="col-lg-6">
                                <div class="form-group">
                                    <input v-model="zipCode" type="text" class="form-control" placeholder="รหัสไปรษณีย์" :class="{ 'is-invalid': $v.zipCode.$error }" />
                                    <div v-if="!$v.zipCode.required" class="invalid-feedback">กรุณากรอก รหัสไปรษณีย์</div>
                                </div>
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
                            <input @change="handleFileUpload()" ref="avatar" type="file" class="custom-file-input" id="profile" :class="{ 'is-invalid': $v.avatar.$error }">
                            <label class="custom-file-label" for="profile">{{ $data['avatar'] ? $data['avatar'].name : 'เลือกไฟล์' }}</label>
                        <div v-if="!$v.avatar.required" class="invalid-feedback">กรุณากรอก รูปภาพประจำตัว</div>
                        </div>
                    </div>
                </div>

                <div class="form-group row">
                    <label class="col-lg-2 col-form-label">อีเมล</label>
                    <div class="col-lg-10">
                        <input v-model="email" type="text" class="form-control" :class="{ 'is-invalid': $v.email.$error }" />
                        <div v-if="!$v.email.required" class="invalid-feedback">กรุณากรอก อีเมล</div>
                    </div>
                </div>

                <div class="form-group row">
                    <label class="col-lg-2 col-form-label">ชื่อผู้ใช้งาน</label>
                    <div class="col-lg-10">
                        <input v-model="username" type="text" class="form-control" :class="{ 'is-invalid': $v.username.$error }" />
                        <div v-if="!$v.username.required" class="invalid-feedback">กรุณากรอก ชื่อผู้ใช้งาน</div>
                    </div>
                </div>

                <div class="form-group row">
                    <label class="col-lg-2 col-form-label">รหัสผู้ใช้งาน</label>
                    <div class="col-lg-10">
                        <input v-model="password" type="password" class="form-control" :class="{ 'is-invalid': $v.password.$error }" />
                        <div v-if="!$v.password.required" class="invalid-feedback">กรุณากรอก รหัสผู้ใช้งาน</div>
                    </div>
                </div>

                <div class="form-group row">
                    <label class="col-lg-2 col-form-label">ยืนยันรหัสผู้ใช้งาน</label>
                    <div class="col-lg-10">
                        <input v-model="confirmPassword" type="password" class="form-control" :class="{ 'is-invalid': $v.confirmPassword.$error }" />
                        <div v-if="!$v.confirmPassword.required" class="invalid-feedback">กรุณากรอก รหัสผู้ใช้งาน</div>
                        <div v-if="!$v.confirmPassword.sameAs" class="invalid-feedback">รหัสผู้ใช้งานไม่ตรงกัน</div>
                    </div>
                </div>

                <div class="mb-5"></div>

                <div class="form-group text-center">
                    <label>
                        <input v-model="accept" true-value="accept" false-value="" type="checkbox" :class="{ 'is-invalid': $v.accept.$error }" /> ยอมรับข้อเสนอในการสมัครสมาชิก
                        <div class="invalid-feedback">กรุณายอมรับข้อเสนอในการสมัครสมาชิก</div>
                    </label>
                </div>

                <div class="form-group text-center">
                    <button class="btn btn-default">ยกเลิก</button>
                    <button class="btn btn-gradient-primary px-4" type="submit">บันทึก</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { required, sameAs } from 'vuelidate/lib/validators'

export default {
    auth: 'guest',
    layout: 'auth',

    validations: {
        name: { required },
        birthDay: { required },
        id: { required },
        tel: { required },
        lineID: { required },
        address: { required },
        subDistrict: { required },
        district: { required },
        province: { required },
        zipCode: { required },
        avatar: { required },
        email: { required },
        username: { required },
        password: { required },
        confirmPassword: { sameAs: sameAs('password') },
        accept: { required }
    },

    data: () => ({
        name: '',
        birthDay: '',
        id: '',
        tel: '',
        lineID: '',
        address: '',
        subDistrict: null,
        district: null,
        province: null,
        zipCode: '',
        avatar: null,
        email: '',
        username: '',
        password: '',
        confirmPassword: '',
        accept: null
    }),

    computed: {
        ...mapState('address', {
            provinces: 'provinces',
            districts: 'districts',
            subDistricts: 'subDistricts'
        })
    },

    methods: {
        ...mapActions({
            register: 'account/register'
        }),
        ...mapActions('address', {
            fetchProvinces: 'provinces',
            fetchDistricts: 'districts',
            fetchSubDistricts: 'subDistricts',
        }),
        handleFileUpload () {
            this.avatar = this.$refs.avatar.files[0]
        },
        async onSubmit () {
            this.$v.$touch()

            if (this.$v.$invalid) {
                return
            }

            await this.register({
                name: this.name,
                birth_date: this.birthDay,
                citizen_id: this.id,
                tel: this.tel,
                line: this.lineID,
                address: this.address,
                sub_district_id: this.subDistrict,
                zip_code: this.zipCode,
                avatar: this.avatar,
                email: this.email,
                username: this.username,
                password: this.password
            }).then(() => {
                this.$bvToast.toast('คลิ๊กที่นี่เพื่อเข้าสู่ระบบ', {
                    title: 'ลงทะเบียนเกษตรกรสำเร็จ',
                    toaster: 'b-toaster-bottom-center',
                    variant: 'success',
                    noAutoHide: true,
                    href: '/login',
                })

                Object.assign(this.$data, this.$options.data.apply(this))
                this.$v.$reset()
            }).catch(error => {

                if (error.response.status == 422) {
                    this.$bvToast.toast('อีเมลหรือชื่อผู้ใช้งานถูกใช้ไปแล้ว', {
                        title: 'เกิดข้อผิดพลาด',
                        toaster: 'b-toaster-bottom-center',
                        variant: 'danger',
                        noAutoHide: true
                    })

                    return
                }

                this.$bvToast.toast('ไม่สามารถทำการลงทะเบียนได้', {
                    title: 'เกิดข้อผิดพลาด',
                    toaster: 'b-toaster-bottom-center',
                    variant: 'danger',
                    noAutoHide: true
                })
            })
        }
    },
    mounted () {
        this.fetchProvinces()
    }
}
</script>
