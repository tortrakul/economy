<template>
    <div class="card">
        <div class="card-header d-flex flex-column flex-lg-row bg-white">
            <div class="d-flex align-items-center">
                <router-link to="/farms" class="btn btn-sm btn-default">
                    <i class="material-icons">chevron_left</i>
                </router-link>

                <h5 class="card-title mb-0">เพิ่มสวน</h5>
            </div>
        </div>

        <div class="card-body">
            <form @submit.prevent="onSubmit">
                <div class="form-group row">
                    <label class="col-lg-2 col-form-label">ชื่อเจ้าของ</label>
                    <div class="col-lg-10">
                        <template v-if="!$auth.hasScope('admin')">
                            <input :value="$auth.user.name" type="text" class="form-control-plaintext" disabled readonly />
                            <input type="hidden" v-model="owner_id" />
                        </template>
                        <select v-else v-model="owner_id" class="form-control" :class="{ 'is-invalid': $v.owner_id.$error }">
                            <option v-for="user in users" :value="user.id" :key="user.id">{{ user.name }}</option>
                        </select>
                        <div v-if="!$v.owner_id.required" class="invalid-feedback">กรุณากรอก ชื่อเจ้าของ</div>
                    </div>
                </div>

                <div class="form-group row">
                    <label class="col-lg-2 col-form-label">ชื่อสวน</label>
                    <div class="col-lg-10">
                        <input v-model="name" type="text" class="form-control" :class="{ 'is-invalid': $v.name.$error }" />
                        <div v-if="!$v.address.required" class="invalid-feedback">กรุณากรอก ชื่อสวน</div>
                    </div>
                </div>

                <div class="form-group row">
                    <label class="col-lg-2 col-form-label">เบอร์โทรศัพท์</label>
                    <div class="col-lg-10">
                        <input v-model="tel" type="text" class="form-control" :class="{ 'is-invalid': $v.tel.$error }" />
                        <div v-if="!$v.address.required" class="invalid-feedback">กรุณากรอก เบอร์โทรศัพท์</div>
                    </div>
                </div>

                <div class="form-group row">
                    <label class="col-lg-2 col-form-label">ที่อยู่สวน</label>
                    <div class="col-lg-10">
                        <input v-model="address" type="text" class="form-control" :class="{ 'is-invalid': $v.address.$error }" />
                        <div v-if="!$v.address.required" class="invalid-feedback">กรุณากรอก ที่อยู่สวน</div>

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

                <div class="form-group row">
                    <div class="col-lg-10 offset-lg-2">
                        <GmapMap
                            :center="center"
                            @center_changed="move"
                            :zoom="16"
                            style="height: 300px">
                            <GmapMarker :position="{ lat, lng }" />
                        </GmapMap>
                    </div>
                </div>

                <div class="form-group row">
                    <label class="col-lg-2 col-form-label">รายละเอียด</label>
                    <div class="col-lg-10">
                        <textarea v-model="description" class="form-control" :class="{ 'is-invalid': $v.description.$error }"></textarea>
                        <div v-if="!$v.description.required" class="invalid-feedback">กรุณากรอก รายละเอียด</div>
                    </div>
                </div>

                <div class="form-group row" v-for="(file,index) in ['file1', 'file2', 'file3', 'file4']" :key="index">
                    <label v-if="index == 0" class="col-lg-2 col-form-label">รูปภาพ</label>
                    <div class="col-lg-10" :class="{ 'offset-lg-2': index > 0 }">
                        <div class="custom-file">
                            <input @change="handleFileUpload(file)" :ref="file" type="file" class="custom-file-input" :id="file" :class="{ 'is-invalid': $v[file].$error }">
                            <label class="custom-file-label" :for="file">{{ $data[file] ? $data[file].name : 'เลือกไฟล์' }}</label>
                            <div v-if="!$v[file].required" class="invalid-feedback">กรุณากรอก ไฟล์</div>
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
        owner_id: { required },
        name: { required },
        tel: { required },
        address: { required },
        subDistrict: { required },
        district: { required },
        province: { required },
        zipCode: { required },
        description: { required },
        file1: { required },
        file2: {},
        file3: {},
        file4: {}
    },
    data: () => ({
        center: { lat: 18.7885802, lng: 98.9792284 },
        owner_id: null,
        name: '',
        tel: '',
        address: '',
        subDistrict: null,
        district: null,
        province: null,
        zipCode: '',
        lat: 18.7885802,
        lng: 98.9792284,
        description: '',
        file1: null,
        file2: null,
        file3: null,
        file4: null
    }),
    computed: {
        ...mapState('address', {
            provinces: 'provinces',
            districts: 'districts',
            subDistricts: 'subDistricts'
        }),
        ...mapState('user', {
            users: 'list'
        })
    },
    watch: {
        subDistrict () {
            const { lat, lng } = this.subDistricts.find(sd => sd.id === this.subDistrict)
            this.lat = lat
            this.lng = lng
            this.center.lat = lat
            this.center.lng = lng
        }
    },
    methods: {
        ...mapActions({
            create: 'farm/create'
        }),
        ...mapActions('address', {
            fetchProvinces: 'provinces',
            fetchDistricts: 'districts',
            fetchSubDistricts: 'subDistricts',
        }),
        ...mapActions({
            fetchUser: 'user/all'
        }),
        handleFileUpload (name) {
            this[name] = this.$refs[name][0].files[0]
        },
        async onSubmit () {
            this.$v.$touch()

            if (this.$v.$invalid) {
                return
            }

            this.create({
                owner_id: this.owner_id,
                name: this.name,
                tel: this.tel,
                address: this.address,
                sub_district_id: this.subDistrict,
                zip_code: this.zipCode,
                lat: this.lat,
                lng: this.lng,
                description: this.description,
                file1: this.file1,
                file2: this.file2,
                file3: this.file3,
                file4: this.file4
            }).then(() => {
                this.$router.push('/farms')
            }).catch(error => {
                console.log(error)
            })
        },
        move (latLng) {
            this.lat = latLng.lat()
            this.lng = latLng.lng()
        }
    },
    mounted () {
        this.fetchProvinces()

        if (this.$auth.hasScope('admin')) {
            this.fetchUser()
        } else {
            this.owner_id = this.$auth.user.id
        }
    }
}
</script>
