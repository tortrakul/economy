<template>
    <div class="card card-body">
        <div class="row">
            <div v-if="$auth.hasScope('admin')" class="col-md-4 d-flex flex-column">
                <h6 class="text-center">จำนวนเกษตรกร</h6>

                <div class="card card-body border-0 mb-5 justify-content-center flex-grow-1 text-center" style="background-color: #fcd37d;">
                    <h2>{{ farmerCount | number }}</h2>
                    <h5 class="mb-0">คน</h5>
                </div>
            </div>

            <div v-if="$auth.hasScope('admin')" class="col-md-4 d-flex flex-column">
                <h6 class="text-center">จำนวนสวน</h6>

                <div class="card card-body border-0 mb-5 justify-content-center flex-grow-1 text-white text-center" style="background-color: #68acfc;">
                    <h2>{{ farmCount | number }}</h2>
                    <h5 class="mb-0">สวน</h5>
                </div>
            </div>

            <div v-if="$auth.hasScope('admin')" class="col-md-4 d-flex flex-column">
                <h6 class="text-center">จำนวนเฉลี่ยสวนต่อเกษตรกร</h6>

                <div class="card card-body border-0 mb-5 justify-content-center flex-grow-1 text-white text-center" style="background-color: #fe8776;">
                    <h2 class="mb-0">{{ farmerFarmAverage }}</h2>
                </div>
            </div>

            <div class="col-md-4 d-flex flex-column">
                <h6 class="text-center">รายรับรวม<span v-if="$auth.hasScope('admin')">เกษตรกร</span> เดือน{{ parsedMonth }}</h6>

                <div class="card card-body border-0 mb-5 justify-content-center flex-grow-1 text-white text-center" style="background-color: #1baf9d;">
                    <h2>{{ income | number }}</h2>
                    <h5 class="mb-0">บาท</h5>
                </div>
            </div>

            <div class="col-md-4 d-flex flex-column">
                <h6 class="text-center">รายจ่ายรวม<span v-if="$auth.hasScope('admin')">เกษตรกร</span> เดือน{{ parsedMonth }}</h6>

                <div class="card card-body border-0 mb-5 justify-content-center flex-grow-1 text-white text-center" style="background-color: #f88b8c;">
                    <h2>{{ expense | number }}</h2>
                    <h5 class="mb-0">บาท</h5>
                </div>
            </div>

            <div class="col-md-4 d-flex flex-column">
                <h6 class="text-center">รายรับ - รายจ่ายรวมปี {{ parsedYear }}</h6>

                <div class="card card-body border-0 mb-5 justify-content-center flex-grow-1 text-white text-center" style="background-color: #f3ab76;">
                    <h2>{{ total | number }}</h2>
                    <h5 class="mb-0">บาท</h5>
                </div>
            </div>

            <div class="col-12">
                <h6 class="mb-3 text-center">ผลผลิตรายเดือน</h6>
                <line-chart :key="income" :data="chartData" style="position: relative; height: 250px;"  />
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import LineChart from '~/components/charts/Line'

export default {
  components: {
    LineChart
  },
  methods: {
    ...mapActions({
        get: 'dashboard/get'
    })
  },
  computed: {
    ...mapState('dashboard', [
        'months',
        'farmerCount',
        'farmCount',
        'farmerFarmAverage',
        'income',
        'expense',
        'total',
        'monthlyIncome'
    ]),
    ...mapGetters('dashboard', [
        'parsedMonth',
        'parsedYear'
    ]),
    chartData () {
        return {
            labels: this.monthlyIncome.map(month => this.months[month.month]),
            datasets: [{
                backgroundColor: `rgb(75, 192, 192)`,
                data: this.monthlyIncome.map(month => month.income)
            }]
        }
    }
  },
  mounted () {
    this.get()
  }
}
</script>
