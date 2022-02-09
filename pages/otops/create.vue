<template>
    <div class="card">
        <div class="card-header d-flex flex-column flex-lg-row bg-white">
            <div class="d-flex align-items-center">
                <router-link to="/otops" class="btn btn-sm btn-default">
                    <i class="material-icons">chevron_left</i>
                </router-link>

                <h5 class="card-title mb-0">เพิ่มสินค้า OTOP</h5>
            </div>
        </div>

        <div class="card-body">
            <form @submit.prevent="onSubmit">
                <div class="form-group row">
                    <label class="col-lg-2 col-form-label">ร้านค้า</label>
                    <div class="col-lg-10">
                        <select v-model="shop_id" class="form-control" :class="{ 'is-invalid': $v.shop_id.$error }">
                            <option disabled :value="null">ร้านค้า</option>
                            <option v-for="f in shops" :value="f.id" :key="f.id">{{ f.name }}</option>
                        </select>
                        <div v-if="!$v.shop_id.required" class="invalid-feedback">กรุณากรอก ร้านค้า</div>
                    </div>
                </div>

                <div class="form-group row">
                    <label class="col-lg-2 col-form-label">ชื่อสินค้า OTOP</label>
                    <div class="col-lg-10">
                        <input v-model="name" type="text" class="form-control" :class="{ 'is-invalid': $v.name.$error }" />
                        <div v-if="!$v.name.required" class="invalid-feedback">กรุณากรอก ชื่อสินค้า OTOP</div>
                    </div>
                </div>

                <div class="form-group row">
                    <label class="col-lg-2 col-form-label">จำนวน</label>
                    <div class="col-lg-10">
                        <input v-model="amount" type="number" class="form-control" :class="{ 'is-invalid': $v.amount.$error }" />
                        <div v-if="!$v.amount.required" class="invalid-feedback">กรุณากรอก จำนวน</div>
                    </div>
                </div>

                <div class="form-group row">
                    <label class="col-lg-2 col-form-label">ราคา</label>
                    <div class="col-lg-10">
                        <input v-model="price" type="text" class="form-control" :class="{ 'is-invalid': $v.price.$error }" />
                        <div v-if="!$v.price.required" class="invalid-feedback">กรุณากรอก ราคา</div>
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
        shop_id: { required },
        name: { required },
        amount: { required },
        price: { required },
        description: { required },
        file1: { required },
        file2: {},
        file3: {},
        file4: {}
    },
    data: () => ({
        shop_id: null,
        name: '',
        amount: '',
        price: '',
        description: null,
        file1: null,
        file2: null,
        file3: null,
        file4: null
    }),
    computed: {
        ...mapState('shop', {
            shops: 'list',
        })
    },
    methods: {
        ...mapActions({
            create: 'otop/create'
        }),
        ...mapActions({
            fetchShops: 'shop/all'
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
                this.$router.push('/otops')
            }).catch(error => {
                console.log(error)
            })
        }
    },
    mounted () {
        this.fetchShops()
    }
}
</script>
