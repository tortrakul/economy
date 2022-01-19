<template>
    <div class="card">
        <div class="card-header d-flex flex-column flex-lg-row bg-white">
            <div class="d-flex align-items-center">
                <router-link v-if="row" :to="`/shops/${row.id}`" class="btn btn-sm btn-default">
                    <i class="material-icons">chevron_left</i>
                </router-link>

                <h5 class="card-title mb-0">แก้ไขรายละเอียด</h5>
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
                    <label class="col-lg-2 col-form-label">ชื่อร้านค้า OTOP</label>
                    <div class="col-lg-10">
                        <input v-model="name" type="text" class="form-control" :class="{ 'is-invalid': $v.name.$error }" />
                        <div v-if="!$v.name.required" class="invalid-feedback">กรุณากรอก ชื่อร้านค้า OTOP</div>
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
                    <label class="col-lg-2 col-form-label">ที่อยู่ร้านค้า OTOP</label>
                    <div class="col-lg-10">
                        <input v-model="address" type="text" class="form-control" :class="{ 'is-invalid': $v.address.$error }" />
                        <div v-if="!$v.address.required" class="invalid-feedback">กรุณากรอก ที่อยู่ร้านค้า OTOP</div>

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
                                    <select v-model="subDistrict" @change="setLatLng" class="form-control" :disabled="!subDistricts.length" :class="{ 'is-invalid': $v.subDistrict.$error }">
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
        description: { required }
    },
    data: () => ({
        owner_id: null,
        name: '',
        tel: '',
        address: '',
        subDistrict: '',
        district: '',
        province: '',
        zipCode: '',
        lat: '',
        lng: '',
        description: '',
        center: { lat: 18.7885802, lng: 98.9792284 }
    }),
    computed: {
        ...mapState('address', {
            provinces: 'provinces',
            districts: 'districts',
            subDistricts: 'subDistricts'
        }),
        ...mapState('shop', [
            'row'
        ]),
        ...mapState('user', {
            users: 'list'
        })
    },
    methods: {
        ...mapActions({
            find: 'shop/find',
            update: 'shop/update'
        }),
        ...mapActions('address', {
            fetchProvinces: 'provinces',
            fetchDistricts: 'districts',
            fetchSubDistricts: 'subDistricts',
        }),
        ...mapActions({
            fetchUsers: 'user/all'
        }),
        async onSubmit () {
            this.$v.$touch()

            if (this.$v.$invalid) {
                return
            }

            this.update({
                id: this.row.id,
                owner_id: this.owner_id,
                name: this.name,
                tel: this.tel,
                address: this.address,
                sub_district_id: this.subDistrict,
                zip_code: this.zipCode,
                lat: this.lat,
                lng: this.lng,
                description: this.description
            }).then(() => {
                this.$router.push(`/shops/${this.row.id}`)
            })
        },
        move (latLng) {
            this.lat = latLng.lat()
            this.lng = latLng.lng()
        },
        setLatLng () {
            const { lat, lng } = this.subDistricts.find(sd => sd.id === this.subDistrict)
            this.lat = lat
            this.lng = lng
            this.center.lat = lat
            this.center.lng = lng
        }
    },
    mounted () {
        this.fetchProvinces()
        this.fetchUsers()

        this.find(this.$route.params.id).then(
            () => {
                this.owner_id = this.row.owner_id
                this.name = this.row.name
                this.tel = this.row.tel
                this.address = this.row.address
                this.subDistrict = this.row.sub_district_id
                this.district = this.row.district_id
                this.province = this.row.province_id
                this.zipCode = this.row.zip_code
                this.lat = this.row.lat
                this.lng = this.row.lng
                this.description = this.row.description

                this.fetchDistricts(this.province)
                this.fetchSubDistricts(this.district)
                this.center = { lat: this.lat, lng: this.lng }
            }
        )
    }
}
</script>
