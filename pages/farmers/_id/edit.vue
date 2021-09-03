<template>
    <div class="card">
        <div class="card-header d-flex flex-column flex-lg-row bg-white">
            <div class="d-flex align-items-center">
                <router-link v-if="row" :to="`/farmers/${row.id}`" class="btn btn-sm btn-default">
                    <i class="material-icons">chevron_left</i>
                </router-link>

                <h5 class="card-title mb-0">แก้ไขรายละเอียด</h5>
            </div>
        </div>

        <div class="card-body">
            <form @submit.prevent="onSubmit">
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
                        <input v-model="confirm_password" type="password" class="form-control" :class="{ 'is-invalid': $v.confirm_password.$error }" />
                        <div v-if="!$v.confirm_password.required" class="invalid-feedback">กรุณากรอก รหัสผู้ใช้งาน</div>
                        <div v-if="!$v.confirm_password.sameAs" class="invalid-feedback">รหัสผู้ใช้งานไม่ตรงกัน</div>
                    </div>
                </div>

                <div class="form-group row">
                    <label class="col-lg-2 col-form-label">ชื่อ</label>
                    <div class="col-lg-10">
                        <input v-model="name" type="text" class="form-control" :class="{ 'is-invalid': $v.name.$error }" />
                        <div v-if="!$v.name.required" class="invalid-feedback">กรุณากรอก ชื่อ</div>
                    </div>
                </div>

                <div class="form-group row">
                    <label class="col-lg-2 col-form-label">เลขประจำตัวประชาชน</label>
                    <div class="col-lg-10">
                        <input v-model="citizen_id" type="text" class="form-control" :class="{ 'is-invalid': $v.citizen_id.$error }" />
                        <div v-if="!$v.citizen_id.required" class="invalid-feedback">กรุณากรอก เลขประจำตัวประชาชน</div>
                    </div>
                </div>

                <div class="form-group row">
                    <label class="col-lg-2 col-form-label">ที่อยู่</label>
                    <div class="col-lg-10">
                        <input v-model="address" type="text" class="form-control" :class="{ 'is-invalid': $v.address.$error }" />
                        <div v-if="!$v.address.required" class="invalid-feedback">กรุณากรอก ที่อยู่</div>

                        <div class="row mt-3">
                            <div class="col-lg-6">
                                <div class="form-group">
                                    <select v-model="province_id" @change="fetchDistricts(province_id)" class="form-control" :class="{ 'is-invalid': $v.province_id.$error }">
                                        <option disabled :value="null">จังหวัด</option>
                                        <option v-for="p in provinces" :value="p.id" :key="p.id">{{ p.name }}</option>
                                    </select>
                                    <div v-if="!$v.province_id.required" class="invalid-feedback">กรุณากรอก จังหวัด</div>
                                </div>
                            </div>

                            <div class="col-lg-6">
                                <div class="form-group">
                                    <select v-model="district_id" @change="fetchSubDistricts(district_id)" class="form-control" :disabled="!districts.length" :class="{ 'is-invalid': $v.district_id.$error }">
                                        <option disabled :value="null">อำเภอ</option>
                                        <option v-for="d in districts" :value="d.id" :key="d.id">{{ d.name }}</option>
                                    </select>
                                    <div v-if="!$v.district_id.required" class="invalid-feedback">กรุณากรอก อำเภอ</div>
                                </div>
                            </div>

                            <div class="col-lg-6">
                                <div class="form-group">
                                    <select v-model="sub_district_id" class="form-control" :disabled="!subDistricts.length" :class="{ 'is-invalid': $v.sub_district_id.$error }">
                                        <option disabled :value="null">ตำบล</option>
                                        <option v-for="sd in subDistricts" :value="sd.id" :key="sd.id">{{ sd.name }}</option>
                                    </select>
                                    <div v-if="!$v.sub_district_id.required" class="invalid-feedback">กรุณากรอก ตำบล</div>
                                </div>
                            </div>

                            <div class="col-lg-6">
                                <div class="form-group">
                                    <input v-model="zip_code" type="text" class="form-control" placeholder="รหัสไปรษณีย์" :class="{ 'is-invalid': $v.zip_code.$error }" />
                                    <div v-if="!$v.zip_code.required" class="invalid-feedback">กรุณากรอก รหัสไปรษณีย์</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="form-group row">
                    <label class="col-lg-2 col-form-label">วันเกิด</label>
                    <div class="col-lg-10">
                        <b-form-datepicker v-model="birth_date" locale="th" :class="{ 'is-invalid': $v.birth_date.$error }" />
                        <div v-if="!$v.birth_date.required" class="invalid-feedback">กรุณากรอก วันเกิด</div>
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
                    <label class="col-lg-2 col-form-label">อีเมล์</label>
                    <div class="col-lg-10">
                        <input v-model="email" type="text" class="form-control" :class="{ 'is-invalid': $v.email.$error }" />
                        <div v-if="!$v.email.required" class="invalid-feedback">กรุณากรอก อีเมล์</div>
                    </div>
                </div>

                <div class="form-group row">
                    <label class="col-lg-2 col-form-label">พร้อมเพย์</label>
                    <div class="col-lg-10">
                        <input v-model="promptpay" type="text" class="form-control" :class="{ 'is-invalid': $v.promptpay.$error }" />
                        <div v-if="!$v.promptpay.required" class="invalid-feedback">กรุณากรอก พร้อมเพย์</div>
                    </div>
                </div>

                <div class="form-group row">
                    <label class="col-lg-2 col-form-label">ไลน์ไอดี</label>
                    <div class="col-lg-10">
                        <input v-model="line" type="text" class="form-control" :class="{ 'is-invalid': $v.line.$error }" />
                        <div v-if="!$v.line.required" class="invalid-feedback">กรุณากรอก ไลน์ไอดี</div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-10 offset-lg-2">
                        <button class="btn btn-gradient-primary px-4" type="submit">บันทึก</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { required, sameAs } from 'vuelidate/lib/validators'

export default {
    validations: {
        username: { required },
        password: {},
        confirm_password: { sameAs: sameAs('password') },
        name: { required },
        citizen_id: { required },
        address: { required },
        sub_district_id: { required },
        district_id: { required },
        province_id: { required },
        zip_code: { required },
        birth_date: { required },
        tel: { required },
        email: { required },
        promptpay: { required },
        line: { required }
    },
    data: () => ({
        username: '',
        password: '',
        confirm_password: '',
        name: '',
        citizen_id: '',
        address: '',
        sub_district_id: null,
        district_id: null,
        province_id: null,
        zip_code: '',
        birth_date: '',
        tel: '',
        email: '',
        promptpay: '',
        line: ''
    }),
    computed: {
        ...mapState('farm', {
            farms: 'list',
        }),
        ...mapState('address', {
            provinces: 'provinces',
            districts: 'districts',
            subDistricts: 'subDistricts'
        }),
        ...mapState('user', [
            'row'
        ])
    },
    methods: {
        ...mapActions({
            find: 'user/find',
            update: 'user/update'
        }),
        ...mapActions({
            fetchFarms: 'farm/all'
        }),
        ...mapActions('address', {
            fetchProvinces: 'provinces',
            fetchDistricts: 'districts',
            fetchSubDistricts: 'subDistricts',
        }),
        async onSubmit () {
            this.$v.$touch()

            if (this.$v.$invalid) {
                return
            }

            this.update({ id: this.row.id, ...this.$data }).then(() => {
                this.$router.push(`/farmers/${this.row.id}`)
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
        this.fetchFarms()
        this.fetchProvinces()

        this.find(this.$route.params.id).then(
            () => {
                this.username = this.row.username
                this.name = this.row.name
                this.citizen_id = this.row.citizen_id
                this.address = this.row.address
                this.sub_district_id = this.row.sub_district_id
                this.district_id = this.row.district_id
                this.province_id = this.row.province_id
                this.zip_code = this.row.zip_code
                this.birth_date = this.row.birth_date
                this.tel = this.row.tel
                this.email = this.row.email
                this.promptpay = this.row.promptpay
                this.line = this.row.line

                this.fetchDistricts(this.province_id)
                this.fetchSubDistricts(this.district_id)
            }
        )
    }
}
</script>
