<template>
    <div class="card">
        <div class="card-header d-flex flex-column flex-lg-row bg-white">
            <div class="d-flex align-items-center">
                <router-link to="/farmers" class="btn btn-sm btn-default">
                    <i class="material-icons">chevron_left</i>
                </router-link>

                <h5 class="card-title mb-0">เพิ่มเกษตรกร</h5>
            </div>
        </div>

        <div class="card-body">
            <form @submit.prevent="onSubmit">
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
                        <b-form-datepicker v-model="birth_date" :class="{ 'is-invalid': $v.birth_date.$error }" />
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

                <div class="form-group row" v-for="(file,index) in ['file1']" :key="index">
                    <label v-if="index == 0" class="col-lg-2 col-form-label">รูปโปรไฟล์</label>
                    <div class="col-lg-10" :class="{ 'offset-lg-2': index > 0 }">
                        <div class="custom-file">
                            <input @change="handleFileUpload(file)" :ref="file" type="file" class="custom-file-input" :id="file" :class="{ 'is-invalid': $v[file].$error }">
                            <label class="custom-file-label" :for="file">{{ $data[file] ? $data[file].name : 'เลือกไฟล์' }}</label>
                            <div v-if="!$v[file].required" class="invalid-feedback">กรุณากรอก รูปโปรไฟล์</div>
                        </div>
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
import { required } from 'vuelidate/lib/validators'

export default {
    validations: {
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
        line: { required },
        file1: { required }
    },
    data: () => ({
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
        line: '',
        file1: null
    }),
    computed: {
        ...mapState('farm', {
            farms: 'list',
        }),
        ...mapState('address', {
            provinces: 'provinces',
            districts: 'districts',
            subDistricts: 'subDistricts'
        })
    },
    methods: {
        ...mapActions({
            create: 'user/create'
        }),
        ...mapActions({
            fetchFarms: 'farm/all'
        }),
        ...mapActions('address', {
            fetchProvinces: 'provinces',
            fetchDistricts: 'districts',
            fetchSubDistricts: 'subDistricts',
        }),
        handleFileUpload (name) {
            this[name] = this.$refs[name][0].files[0]
        },
        async onSubmit () {
            this.$v.$touch()

            if (this.$v.$invalid) {
                return
            }

            this.create(this.$data).then(() => {
                this.$router.push('/farmers')
            }).catch(error => {
                console.log(error)
            })
        }
    },
    mounted () {
        this.fetchFarms()
        this.fetchProvinces()
    }
}
</script>
