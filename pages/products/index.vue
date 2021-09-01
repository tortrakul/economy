<template>
    <div>
        <div class="card card-body mb-3">
            <h5 class="card-title">รายชื่อสินค้า</h5>

            <div class="d-flex mb-5">
                <router-link to="/products/create" class="btn btn-gradient-primary pr-3 text-nowrap">
                    <i class="material-icons">add</i> เพิ่มสินค้า
                </router-link>

                <div class="input-group mx-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text"><i class="material-icons">search</i></span>
                    </div>

                    <input @change="e => all({ search: e.target.value })" type="text" class="form-control" placeholder="ค้นหา" />
                </div>

                <button class="btn btn-default">
                    <span class="material-icons-outlined">tune</span>
                </button>
            </div>

            <div class="row">
                <div class="col-md-6 col-lg-3" v-for="(product,index) in list" :key="index">
                    <Card
                        class="mb-3"
                        :cover="product.cover"
                        :title="product.name"
                        :subtitle="`${product.amount} ${product.unit} / ${product.total} บาท <br /> ${product.date}`" />

                    <nuxt-link :to="`/products/${product.id}`" class="stretched-link" />
                </div>
            </div>
        </div>
        <b-pagination
            value="1"
            :total-rows="meta.total"
            :per-page="meta.per_page"
            @change="page => all({ page })" />
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Card from '~/components/Card';

export default {
  components: {
    Card
  },
  methods: {
    ...mapActions({
        all: 'product/all'
    })
  },
  computed: {
    ...mapState('product', [
        'list',
        'meta'
    ])
  },
  mounted () {
    this.all()
  }
}
</script>
