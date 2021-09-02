<template>
    <div>
        <div class="d-lg-none row justify-content-center">
            <div class="col-lg-6">
                <div class="card card-body mb-3">
                    <h5 class="card-title">รูปโปรไฟล์</h5>

                    <Media
                        :key="$auth.user.avatar_id"
                        :src="$auth.user.avatar"
                        :id="$auth.user.id"
                        model="user"
                        index="0"
                        :media-id="$auth.user.avatar_id"
                        :callback="() => $auth.fetchUser()"
                        class="mx-auto mb-2 w-50" />
                </div>
            </div>
        </div>

        <form @submit.prevent="onSubmit">
            <div class="card card-body mb-3">
                <h5 class="card-title">ข้อมูลส่วนตัว</h5>

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
                        <b-form-datepicker v-model="birth_date" :class="{ 'is-invalid': $v.birth_date.$error }" />
                        <div v-if="!$v.birth_date.required" class="invalid-feedback">กรุณากรอก วัน เดือน ปีเกิด</div>
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
                    <label class="col-lg-2 col-form-label">เบอร์โทรศัพท์</label>
                    <div class="col-lg-10">
                        <input v-model="tel" type="text" class="form-control" :class="{ 'is-invalid': $v.tel.$error }" />
                        <div v-if="!$v.tel.required" class="invalid-feedback">กรุณากรอก เบอร์โทรศัพท์</div>
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
            </div>

            <div class="card card-body mb-3">
                <h5 class="card-title">ที่อยู่</h5>
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
            </div>

            <div class="card card-body mb-3">
                <h5 class="card-title">บัญชีผู้ใช้งาน</h5>

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
            </div>

            <button class="btn btn-gradient-primary px-4" type="submit">บันทึก</button>
        </form>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { required } from 'vuelidate/lib/validators'

export default {

    validations: {
        name: { required },
        birth_date: { required },
        citizen_id: { required },
        tel: { required },
        promptpay: { required },
        line: { required },
        address: { required },
        sub_district_id: { required },
        district_id: { required },
        province_id: { required },
        zip_code: { required },
        email: { required },
        username: { required }
    },

    data: () => ({
        name: '',
        birth_date: '',
        citizen_id: '',
        tel: '',
        promptpay: '',
        line: '',
        address: '',
        sub_district_id: null,
        district_id: null,
        province_id: null,
        zip_code: '',
        email: '',
        username: ''
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
            update: 'account/update'
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

            await this.update(this.$data).then(() => {
                this.$bvToast.toast('บันทึกข้อมูลสำเร็จ', {
                    title: '',
                    toaster: 'b-toaster-bottom-center',
                    variant: 'success',
                    noAutoHide: true
                })
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

        this.$auth.fetchUser().then(
            () => {
                this.name = this.$auth.user.name
                this.birth_date = this.$auth.user.birth_date
                this.citizen_id = this.$auth.user.citizen_id
                this.tel = this.$auth.user.tel
                this.promptpay = this.$auth.user.promptpay
                this.line = this.$auth.user.line
                this.address = this.$auth.user.address
                this.sub_district_id = this.$auth.user.sub_district_id
                this.district_id = this.$auth.user.district_id
                this.province_id = this.$auth.user.province_id
                this.zip_code = this.$auth.user.zip_code
                this.email = this.$auth.user.email
                this.username = this.$auth.user.username

                this.fetchDistricts(this.province_id)
                this.fetchSubDistricts(this.district_id)
            }
        )
    }
}
</script>
