<template>
    <div>
        <div class="card card-body mb-3">
            <h5 class="card-title">รายการผลผลิต</h5>

            <div class="d-flex flex-column flex-sm-row mb-3 mb-lg-5">
                <router-link to="/products/create" class="btn btn-gradient-primary mr-sm-3 mb-3 mb-sm-0 text-nowrap">
                    <i class="material-icons">add</i> เพิ่มผลผลิต
                </router-link>

                <div class="input-group">
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
                    <TagCard
                        class="mb-3"
                        :cover="product.cover"
                        :title="product.name"
                        :subtitle="`${product.amount} ${product.unit} / ${product.total} บาท`"
                        :profile="product.farm_avatar"
                        :name="product.farm"
                        tag-class="primary"
                        tag-label="Lorem ipsum" />

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
import TagCard from '~/components/TagCard';

export default {
  components: {
    TagCard
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
