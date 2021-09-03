<template>
    <div class="card card-body">
        <h5 class="card-title">ข้อมูลทางอากาศ</h5>

        <div class="d-flex flex-column flex-lg-row">
          <p class="mr-lg-4 mb-1 mb-lg-0 text-muted">
            <img src="/svg/calender.svg" width="16" height="16" class="mr-2" />
            {{ date }}
          </p>

          <p class="mb-0 text-muted">
            <img src="/svg/point.svg" width="16" height="16" class="mr-2" />
            อ.ป่าซาง จ.ลำพูน
          </p>
        </div>

        <hr />

        <div id="senses" class="d-flex flex-column flex-lg-row">
            <div class="d-flex flex-lg-column justify-content-between align-items-center flex-grow-1 py-2 text-center border-right">
                <small class="text-muted">อุณหภูมิ</small>
                <div class="d-flex flex-row justify-content-center align-items-center mt-auto">
                    <img src="~/static/svg/weather/temperature.svg" class="mr-3" />
                    {{ temp | number }} °C
                </div>
            </div>
            <div class="d-flex flex-lg-column justify-content-between align-items-center flex-grow-1 py-2 text-center border-right">
                <small class="text-muted">ความชื้นในอากาศ</small>
                <div class="d-flex flex-row justify-content-center align-items-center mt-auto">
                    <img src="~/static/svg/weather/humidity.svg" class="mr-3" />
                    {{ humidity }}%
                </div>
            </div>
            <div class="d-flex flex-lg-column justify-content-between align-items-center flex-grow-1 py-2 text-center border-right">
                <small class="text-muted">ความกดอากาศ</small>
                <div class="d-flex flex-row justify-content-center align-items-center mt-auto">
                    <img src="~/static/svg/weather/air-pressure.svg" class="mr-3" />
                    {{ pressure | decimal }} atm
                </div>
            </div>
            <div class="d-flex flex-lg-column justify-content-between align-items-center flex-grow-1 py-2 text-center border-right">
                <small class="text-muted">สภาพอากาศ</small>
                <div class="d-flex flex-row justify-content-center align-items-center mt-auto">
                    <img src="~/static/svg/weather/sunlight.svg" class="mr-3" />
                    {{ description }}
                </div>
            </div>
            <div class="d-flex flex-lg-column justify-content-between align-items-center flex-grow-1 py-2 text-center">
                <small class="text-muted">ความเร็วลม</small>
                <div class="d-flex flex-row justify-content-center align-items-center mt-auto">
                    <img src="~/static/svg/weather/air-speed.svg" class="mr-3" />
                    {{ wind | decimal }} km/hr
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import moment from 'moment'

export default {
    computed: {
        ...mapState('weather', [
            'description',
            'temp',
            'humidity',
            'pressure',
            'sun',
            'wind'
        ]),
        date () {
            return moment().add(543, 'years').lang('th').format('dddd Do MMMM YYYY')
        }
    },
    methods: {
        ...mapActions('weather', [
            'fetch'
        ])
    },
    mounted () {
        this.fetch()
    }
}
</script>

<style lang="scss" scoped>
    @media (max-width: 991.98px) {
        #senses {

            > div {
                border-right: none !important;
            }
        }
    }
</style>
