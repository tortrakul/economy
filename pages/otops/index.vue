<template>
    <div>
        <div class="card card-body mb-3">
            <h5 class="card-title">รายการสินค้า OTOP</h5>

            <div class="d-flex flex-column flex-sm-row mb-3">
                <router-link to="/otops/create" class="btn btn-gradient-primary mr-sm-3 mb-3 mb-sm-0 text-nowrap">
                    <i class="material-icons">add</i> เพิ่มสินค้า OTOP
                </router-link>

                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text"><i class="material-icons">search</i></span>
                    </div>

                    <input @change="e => all({ search: e.target.value })" type="text" class="form-control" placeholder="ค้นหา" />
                </div>
            </div>

            <div class="row">
                <div class="col-md-6 col-lg-3" v-for="(otop,index) in list" :key="index">
                    <TagCard
                        class="mb-3"
                        :cover="otop.cover"
                        :title="otop.name"
                        :subtitle="`${otop.price} บาท`"
                        :profile="otop.shop_avatar"
                        :name="otop.shop" />

                    <nuxt-link :to="`/otops/${otop.id}`" class="stretched-link" />
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
  data: () => ({
    filter: false,
    fromDate: null,
    toDate: null
  }),
  watch: {
    fromDate () {
        this.all({ 'from_date': this.fromDate })
    },
    toDate () {
        this.all({ 'to_date': this.toDate })
    }
  },
  methods: {
    ...mapActions({
        all: 'otop/all'
    }),
    tagColor (tag) {

        switch (tag) {
            case 'General': return '#f3776d'; break;
            case 'Organically Grown': return '#b893c7'; break;
            case 'Hydroponics': return '#75b2d9'; break;
            case 'Pesticide Safe': return '#f5c14c'; break;
            case 'Certified Organic': return '#91c962'; break;
        }
    }
  },
  computed: {
    ...mapState('otop', [
        'list',
        'meta'
    ])
  },
  mounted () {
    this.all()
  }
}
</script>
