<template>
    <div class="card">
        <div class="card-header d-flex flex-column flex-lg-row bg-white">
            <div class="d-flex align-items-center">
                <router-link v-if="row" :to="`/products/${row.id}`" class="btn btn-sm btn-default">
                    <i class="material-icons">chevron_left</i>
                </router-link>

                <h5 class="card-title mb-0">แก้ไขรายละเอียด</h5>
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
                    <label class="col-lg-2 col-form-label">ชื่อผลผลิต</label>
                    <div class="col-lg-10">
                        <input v-model="name" type="text" class="form-control" :class="{ 'is-invalid': $v.name.$error }" />
                        <div v-if="!$v.name.required" class="invalid-feedback">กรุณากรอก ชื่อผลผลิต</div>
                    </div>
                </div>

                <div class="form-group row">
                    <label class="col-lg-2 col-form-label">จำนวน</label>
                    <div class="col-lg-10">
                        <input v-model="amount" type="text" class="form-control" :class="{ 'is-invalid': $v.amount.$error }" />
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
                        <input v-model="unit_price" type="text" class="form-control" :class="{ 'is-invalid': $v.unit_price.$error }" />
                        <div v-if="!$v.unit_price.required" class="invalid-feedback">กรุณากรอก ราคาต่อหน่วย</div>
                    </div>
                </div>

                <div class="form-group row">
                    <label class="col-lg-2 col-form-label">วันที่เก็บเกี่ยว</label>
                    <div class="col-lg-10">
                        <b-form-datepicker v-model="date" locale="th" :class="{ 'is-invalid': $v.date.$error }" />
                        <div v-if="!$v.date.required" class="invalid-feedback">กรุณากรอก วันที่เก็บเกี่ยว</div>
                    </div>
                </div>

                <div class="form-group row">
                    <label class="col-lg-2 col-form-label">ราคา</label>
                    <div class="col-lg-10">
                        <input v-model="total" type="text" class="form-control" :class="{ 'is-invalid': $v.total.$error }" />
                        <div v-if="!$v.total.required" class="invalid-feedback">กรุณากรอก ราคา</div>
                    </div>
                </div>

                <div class="form-group row">
                    <label class="col-lg-2 col-form-label">รายละเอียด</label>
                    <div class="col-lg-10">
                        <textarea v-model="description" class="form-control" :class="{ 'is-invalid': $v.description.$error }"></textarea>
                        <div v-if="!$v.description.required" class="invalid-feedback">กรุณากรอก รายละเอียด</div>
                    </div>
                </div>

                <div class="form-group row">
                    <label class="col-lg-2 col-form-label">ประเภท</label>
                    <div class="col-lg-10">
                        <select v-model="tag" class="form-control" :class="{ 'is-invalid': $v.tag.$error }">
                            <option>General</option>
                            <option>Organically Grown</option>
                            <option>Hydroponics</option>
                            <option>Pesticide Safe</option>
                            <option>Certified Organic</option>
                        </select>
                        <div v-if="!$v.tag.required" class="invalid-feedback">กรุณากรอก ประเภท</div>
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
        tag: { required }
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
        tag: null
    }),
    computed: {
        ...mapState('farm', {
            farms: 'list',
        }),
        ...mapState('product', [
            'row'
        ])
    },
    methods: {
        ...mapActions({
            find: 'product/find',
            update: 'product/update'
        }),
        ...mapActions({
            fetchFarms: 'farm/all'
        }),
        async onSubmit () {
            this.$v.$touch()

            if (this.$v.$invalid) {
                return
            }

            this.update({ id: this.row.id, ...this.$data }).then(() => {
                this.$router.push(`/products/${this.row.id}`)
            })
        }
    },
    mounted () {
        this.fetchFarms()

        this.find(this.$route.params.id).then(
            () => {
                this.farm_id = this.row.farm_id
                this.name = this.row.name
                this.amount = this.row.amount
                this.unit = this.row.unit
                this.unit_price = this.row.unit_price
                this.date = this.row.date
                this.total = this.row.total
                this.description = this.row.description
                this.tag = this.row.tag
            }
        )
    }
}
</script>
