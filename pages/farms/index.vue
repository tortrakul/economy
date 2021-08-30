<template>
    <div>
        <div class="card card-body mb-3">
            <h5 class="card-title">รายชื่อสวน</h5>

            <div class="d-flex mb-5">
                <button class="btn btn-gradient-primary pr-3 text-nowrap">
                    <i class="material-icons">add</i> เพิ่มสวน
                </button>

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
                <div class="col-md-6 col-lg-3" v-for="(farm,index) in list" :key="index">
                    <TagCard
                        class="mb-3"
                        cover="assets/Picture.png"
                        :title="farm.name"
                        :subtitle="farm.address.sub_district.district.province.name"
                        profile="assets/Picture.png"
                        :name="farm.owner.name"
                        tag-class="primary"
                        tag-label="Lorem ipsum" />

                    <nuxt-link to="/farms/detail" class="stretched-link" />
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
        all: 'farm/all'
    })
  },
  computed: {
    ...mapState('farm', [
        'list',
        'meta'
    ])
  },
  mounted () {
    this.all()
  }
}
</script>
