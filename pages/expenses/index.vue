<template>
    <div>
        <div class="card card-body mb-3">
            <h5 class="card-title">รายจ่าย</h5>

            <div class="d-flex flex-column flex-sm-row mb-3">
                <router-link to="/expenses/create" class="btn btn-gradient-primary mr-sm-3 mb-3 mb-sm-0 text-nowrap">
                    <i class="material-icons">add</i> เพิ่มรายจ่าย
                </router-link>

                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text"><i class="material-icons">search</i></span>
                    </div>

                    <input @change="e => all({ search: e.target.value })" type="text" class="form-control" placeholder="ค้นหา" />
                </div>

                <button v-if="!filter" class="btn btn-default" @click="filter = true">
                    <span class="material-icons-outlined">tune</span>
                </button>
                <button v-else class="btn btn-default" @click="filter = false; fromDate = null; toDate = null;">
                    <span class="material-icons-outlined">close</span>
                </button>
            </div>

            <div v-if="filter" class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label>ตั้งแต่วันที่ <a v-if="fromDate" @click.prevent="fromDate = null" href="#" class="small text-primary">ลบวันที่</a></label>
                        <b-form-datepicker v-model="fromDate" locale="th" />
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label>ถึงวันที่ <a v-if="toDate" @click.prevent="toDate = null" href="#" class="small text-primary">ลบวันที่</a></label>
                        <b-form-datepicker v-model="toDate" locale="th" />
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-md-6 col-lg-3" v-for="(expense,index) in list" :key="index">
                    <Card
                        class="mb-3"
                        :cover="expense.cover"
                        :title="expense.name"
                        :subtitle="`${expense.amount} ${expense.unit} / ${Math.abs(expense.total)} บาท <br /> ${expense.date}`" />

                    <nuxt-link :to="`/expenses/${expense.id}`" class="stretched-link" />
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
        all: 'transaction/all'
    })
  },
  computed: {
    ...mapState('transaction', [
        'list',
        'meta'
    ])
  },
  mounted () {
    this.all()
  }
}
</script>
