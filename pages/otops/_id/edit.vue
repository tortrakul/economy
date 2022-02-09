<template>
    <div class="card">
        <div class="card-header d-flex flex-column flex-lg-row bg-white">
            <div class="d-flex align-items-center">
                <router-link v-if="row" :to="`/otops/${row.id}`" class="btn btn-sm btn-default">
                    <i class="material-icons">chevron_left</i>
                </router-link>

                <h5 class="card-title mb-0">แก้ไขรายละเอียด</h5>
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
        description: { required }
    },
    data: () => ({
        shop_id: null,
        name: '',
        amount: '',
        price: '',
        description: null
    }),
    computed: {
        ...mapState('shop', {
            shops: 'list',
        }),
        ...mapState('otop', [
            'row'
        ])
    },
    methods: {
        ...mapActions({
            find: 'otop/find',
            update: 'otop/update'
        }),
        ...mapActions({
            fetchShops: 'shop/all'
        }),
        async onSubmit () {
            this.$v.$touch()

            if (this.$v.$invalid) {
                return
            }

            this.update({ id: this.row.id, ...this.$data }).then(() => {
                this.$router.push(`/otops/${this.row.id}`)
            })
        }
    },
    mounted () {
        this.fetchShops()

        this.find(this.$route.params.id).then(
            () => {
                this.shop_id = this.row.shop_id
                this.name = this.row.name
                this.amount = this.row.amount
                this.price = this.row.price
                this.description = this.row.description
            }
        )
    }
}
</script>
