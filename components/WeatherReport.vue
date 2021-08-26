<template>
    <div class="card card-body">
        <h5 class="card-title">ข้อมูลทางอากาศ</h5>

        <div class="d-flex flex-column flex-lg-row">
          <p class="mr-lg-4 mb-1 mb-lg-0 text-muted">
            <img src="/svg/calender.svg" width="16" height="16" class="mr-2" />
            อังคาร 20 กรกฎาคม 2564
          </p>

          <p class="mb-0 text-muted">
            <img src="/svg/point.svg" width="16" height="16" class="mr-2" />
            อ.ฝาง จ.เชียงใหม่
          </p>
        </div>

        <hr />

        <div id="senses" class="d-flex flex-column flex-lg-row">
            <div class="d-flex flex-lg-column justify-content-between align-items-center flex-grow-1 py-2 text-center border-right">
                <small class="text-muted">อุณหภูมิ</small>
                <div class="d-flex flex-row justify-content-center align-items-center mt-auto">
                    <img src="~/static/svg/weather/temperature.svg" class="mr-3" />
                    30 °C
                </div>
            </div>
            <div class="d-flex flex-lg-column justify-content-between align-items-center flex-grow-1 py-2 text-center border-right">
                <small class="text-muted">ความชื้นในอากาศ</small>
                <div class="d-flex flex-row justify-content-center align-items-center mt-auto">
                    <img src="~/static/svg/weather/humidity.svg" class="mr-3" />
                    70%
                </div>
            </div>
            <div class="d-flex flex-lg-column justify-content-between align-items-center flex-grow-1 py-2 text-center border-right">
                <small class="text-muted">ความกดอากาศ</small>
                <div class="d-flex flex-row justify-content-center align-items-center mt-auto">
                    <img src="~/static/svg/weather/air-pressure.svg" class="mr-3" />
                    1 atm
                </div>
            </div>
            <div class="d-flex flex-lg-column justify-content-between align-items-center flex-grow-1 py-2 text-center border-right">
                <small class="text-muted">สภาพดิน</small>
                <div class="d-flex flex-row justify-content-center align-items-center mt-auto">
                    <img src="~/static/svg/weather/soil.svg" class="mr-3" />
                    <div>
                        <div class="d-flex justify-content-start">
                            <img src="~/static/svg/weather/pH.svg" width="12" class="mr-2" />
                            7
                        </div>
                        <div class="d-flex justify-content-start">
                            <img src="~/static/svg/weather/humidity.svg" width="12" class="mr-2" />
                            80%
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-flex flex-lg-column justify-content-between align-items-center flex-grow-1 py-2 text-center border-right">
                <small class="text-muted">แสงแดด</small>
                <div class="d-flex flex-row justify-content-center align-items-center mt-auto">
                    <img src="~/static/svg/weather/sunlight.svg" class="mr-3" />
                    แดดอ่อน
                </div>
            </div>
            <div class="d-flex flex-lg-column justify-content-between align-items-center flex-grow-1 py-2 text-center">
                <small class="text-muted">ความเร็วลม</small>
                <div class="d-flex flex-row justify-content-center align-items-center mt-auto">
                    <img src="~/static/svg/weather/air-speed.svg" class="mr-3" />
                    8 km/hrs
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @media (max-width: 991.98px) {
        #senses {

            > div {
                border-right: none !important;
            }
        }
    }
</style>
