<template>
    <div>
        <div class="card card-body mb-3">
            <h5 class="card-title">รายชื่อสวน</h5>

            <div class="d-flex flex-column flex-sm-row mb-3 mb-lg-5">
                <router-link to="/farms/create" class="btn btn-gradient-primary mr-sm-3 mb-3 mb-sm-0 text-nowrap">
                    <i class="material-icons">add</i> เพิ่มสวน
                </router-link>

                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text"><i class="material-icons">search</i></span>
                    </div>

                    <input @change="e => all({ search: e.target.value })" type="text" class="form-control" placeholder="ค้นหา" />
                </div>
            </div>

            <div class="row">
                <div class="col-md-6 col-lg-3" v-for="(farm,index) in list" :key="index">
                    <TagCard
                        class="mb-3"
                        :cover="farm.cover"
                        :title="farm.name"
                        :subtitle="farm.province"
                        :profile="farm.owner_avatar"
                        :name="farm.owner" />

                    <nuxt-link :to="`/farms/${farm.id}`" class="stretched-link" />
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
