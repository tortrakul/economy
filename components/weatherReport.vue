<template>
  <div class="wrapper">
    <div class="weather-report tile">
      <div class="title">
        <h1>ข้อมูลทางอากาศ</h1>
        <div class="detail">
          <div class="date">
            <div class="icon calender"></div>อังคาร 20 กรกฎาคม 2561
          </div>
          <div class="location">
            <div class="icon point"></div>อ.ฝาง จ.เชียงใหม่
          </div>
        </div>
      </div>
      <div class="content">
        <div class="report-wrapper">
          <div class="weather temperature">
            <div class="title">อุณหภูมิ</div>
            <div class="detail">
              <img src="~/static/svg/weather/temperature.svg">
              <p>30 °C</p>
            </div>
          </div>
          <div class="weather humidity">
            <div class="title">ความชื้นในอากาศ</div>
            <div class="detail">
              <img src="~/static/svg/weather/humidity.svg">
              <p>70%</p>
            </div>
          </div>
          <div class="weather air-pressure">
            <div class="title">ความกดอากาศ</div>
            <div class="detail">
              <img src="~/static/svg/weather/air-pressure.svg">
              <p>1 atm</p>
            </div>
          </div>
          <div class="weather soil">
            <div class="title">สภาพดิน</div>
            <div class="detail">
              <img src="~/static/svg/weather/soil.svg">
              <div class="soil-detail">
                <div class="ph">
                  <img src="~/static/svg/weather/pH.svg">
                  <span>7</span>
                </div>
                <div class="humidity">
                  <img src="~/static/svg/weather/humidity.svg">
                  <span>80%</span>
                </div>
              </div>
            </div>
          </div>
          <div class="weather sunlight">
            <div class="title">แสงแดด</div>
            <div class="detail">
              <img src="~/static/svg/weather/sunlight.svg">
              <p>แดดอ่อน</p>
            </div>
          </div>
          <div class="weather air-speed">
            <div class="title">ความเร็วลม</div>
            <div class="detail">
              <img src="~/static/svg/weather/air-speed.svg">
              <p>8 km/hrs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/_mixins.scss";

.wrapper {
  width: 100%;
  .weather-report.tile {
    padding: 8px 0;
    margin: 0 0 24px;
    height: 231px;
    & > .title {
      padding: 8px 16px;
      border-bottom: 1px solid $border-color;
      h1 {
        margin-bottom: 8px;
      }
      .detail {
        display: flex;
        color: $subtext-color;
        .date {
          width: 35%;
          display: flex;
        }
        .location {
          width: 50%;
          display: flex;
        }
      }
    }
    .content {
      padding: 23px 16px 8px;
      .report-wrapper {
        display: flex;
        width: 100%;
        .weather {
          padding: 0px 8px;
          &:not(:last-child) {
            border-right: 1px solid $border-color;
          }
          .detail {
            display: flex;
            p {
              margin: auto 2px;
            }
          }
          &.soil {
            .detail {
              display: flex;
            }
            .soil-detail {
              margin-left: 8px;
              .humidity {
                img {
                  width: 15px;
                  height: 15px;
                  margin: auto 0;
                }
              }
            }
          }
          &.humidity {
            .detail {
              padding-left: 25%;
            }
          }
          .title {
            text-align: center;
            color: $heading-color;
            margin: 8px 0;
          }
        }
      }
    }
  }
}
.icon {
  background-color: $dark;
  margin: auto 5px;
  margin-left: 0;
  height: 18px;
  width: 16px;
}
.calender {
  mask: url(/svg/calender.svg) no-repeat;
}
.point {
  mask: url(/svg/point.svg) no-repeat;
}
</style>
