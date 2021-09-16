<template>
    <div class="card">
        <div class="card-header d-flex flex-column flex-lg-row bg-white">
            <div class="d-flex align-items-center">
                <router-link to="/expenses" class="btn btn-sm btn-default">
                    <i class="material-icons">chevron_left</i>
                </router-link>

                <h5 class="card-title mb-0">เพิ่มรายจ่าย</h5>
            </div>
        </div>

        <div class="card-body">
            <form @submit.prevent="onSubmit">
                <div class="form-group row">
                    <label class="col-lg-2 col-form-label">สวน</label>
                    <div class="col-lg-10">
                        <select v-model="farm_id" class="form-control" :class="{ 'is-invalid': $v.farm_id.$error }">
                            <option disabled :value="null">สวน</option>
                            <option v-for="f in farms" :value="f.id" :key="f.id">{{ f.name }}</option>
                        </select>
                        <div v-if="!$v.farm_id.required" class="invalid-feedback">กรุณากรอก สวน</div>
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
                    <label class="col-lg-2 col-form-label">จำนวน</label>
                    <div class="col-lg-10">
                        <input v-model="amount" type="number" class="form-control" :class="{ 'is-invalid': $v.amount.$error }" />
                        <div v-if="!$v.amount.required" class="invalid-feedback">กรุณากรอก จำนวน</div>
                    </div>
                </div>

                <div class="form-group row">
                    <label class="col-lg-2 col-form-label">หน่วย</label>
                    <div class="col-lg-10">
                        <input v-model="unit" type="text" class="form-control" :class="{ 'is-invalid': $v.unit.$error }" />
                        <div v-if="!$v.unit.required" class="invalid-feedback">กรุณากรอก หน่วย</div>
                    </div>
                </div>

                <div class="form-group row">
                    <label class="col-lg-2 col-form-label">ราคาต่อหน่วย</label>
                    <div class="col-lg-10">
                        <input v-model="unit_price" type="number" class="form-control" :class="{ 'is-invalid': $v.unit_price.$error }" />
                        <div v-if="!$v.unit_price.required" class="invalid-feedback">กรุณากรอก ราคาต่อหน่วย</div>
                    </div>
                </div>

                <div class="form-group row">
                    <label class="col-lg-2 col-form-label">วันที่</label>
                    <div class="col-lg-10">
                        <b-form-datepicker v-model="date" locale="th" :class="{ 'is-invalid': $v.date.$error }" />
                        <div v-if="!$v.date.required" class="invalid-feedback">กรุณากรอก วันที่</div>
                    </div>
                </div>

                <div class="form-group row">
                    <label class="col-lg-2 col-form-label">ราคา</label>
                    <div class="col-lg-10">
                        <input v-model="total" type="text" class="form-control" :class="{ 'is-invalid': $v.total.$error }" readonly />
                        <div v-if="!$v.total.required" class="invalid-feedback">กรุณากรอก ราคา</div>
                    </div>
                </div>

                <div class="form-group row">
                    <label class="col-lg-2 col-form-label">คำอธิบาย</label>
                    <div class="col-lg-10">
                        <textarea v-model="description" class="form-control" :class="{ 'is-invalid': $v.description.$error }"></textarea>
                        <div v-if="!$v.description.required" class="invalid-feedback">กรุณากรอก คำอธิบาย</div>
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
        farm_id: { required },
        name: { required },
        amount: { required },
        unit: { required },
        unit_price: { required },
        date: { required },
        total: { required },
        description: { required },
        file1: { required },
        file2: {},
        file3: {},
        file4: {}
    },
    data: () => ({
        farm_id: null,
        name: '',
        amount: '',
        unit: '',
        unit_price: '',
        date: null,
        total: '',
        description: null,
        file1: null,
        file2: null,
        file3: null,
        file4: null
    }),
    watch: {
        unit_price () {
            this.total = this.unit_price * this.amount
        },
        amount () {
            this.total = this.unit_price * this.amount
        }
    },
    computed: {
        ...mapState('farm', {
            farms: 'list',
        })
    },
    methods: {
        ...mapActions({
            create: 'transaction/create'
        }),
        ...mapActions({
            fetchFarms: 'farm/all'
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
                this.$router.push('/expenses')
            }).catch(error => {
                console.log(error)
            })
        }
    },
    mounted () {
        this.fetchFarms()
    }
}
</script>
