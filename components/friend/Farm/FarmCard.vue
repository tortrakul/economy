<template>
  <div>
    <div class="container tile">
      <div class="product name">
        <h1>
          <i class="material-icons"></i>{{name}}
        </h1>
      </div>
      <div class="product main">
        <div class="product-img">
          <img src="~/assets/img/farm.jpg">
          <div class="icon-img">
            <div class="icon">
              <img src="~/assets/img/farm.jpg">
            </div>
            <div class="icon">
              <img src="~/assets/img/farm.jpg">
            </div>
            <div class="icon">
              <img src="~/assets/img/farm.jpg">
            </div>
          </div>
        </div>
        <div class="product-text">
          <div class="text-content">
            <div class="text">
              <p>ชื่อสวน</p>
              <p>สวนภูวิไล</p>
            </div>
            <div class="text">
              <p>เจ้าของ</p>
              <p>Some name</p>
            </div>
            <div class="text">
              <p>เบอร์โทรศัพท์</p>
              <p>xxxxxxxxxx4</p>
            </div>
            <div class="text">
              <p>ที่อยู่สวน</p>
              <p>ตู้ ปณ. 72 ปณจ. ฝาง อำเภอฝาง จังหวัดเชียงใหม่ 50110</p>
            </div>
            <div class="text">
              <p>รายละเอียด</p>
              <p>
                สวนส้ม ธนาธร เป็นสวนส้มที่สามารถปลูกส้มได้มากกว่า 10 สายพันธุ์
                แต่ทีรู้จักกันดี คือ ส้มสายน้ำผึ้ง ส้มฟรีมองต์ธนาธร และปัจจุบัน ได้พัฒนา
                ให้กลายเป็นแหล่งท่องเที่ยวสามารถ เข้าไปชมสวนและชิมส้มสด ๆ
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['name']
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";
@import "@/assets/scss/_responsive.scss";
.tile {
  padding: 0;
}
.product {
  padding: 16px;
}
.name {
  border-bottom: 1px solid $border-color;
  i {
    vertical-align: middle;
  }
}
.main {
  display: flex;
  .product-img {
    display: flex;
    position: relative;
    img {
      height: 250px;
      width: 250px;
      border-radius: 15px;
    }
    .material-icons {
      font-size: 20px;
    }
    .main {
      position: absolute;
      left: 227px;
      top: 4px;
    }
    .cell {
      position: absolute;
      left: 315px;
      top: 4px;
    }
    .cell2 {
      position: absolute;
      left: 315px;
      top: 87px;
    }
    .icon-img {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin: 0 8px;
      height: 0px;
      .icon {
        height: 84px;
        img {
          height: 81px;
          width: 80px;
        }
      }
    }
  }
}
.product-text {
  margin-left: 32px;
  .text-content {
    .text {
      display: flex;
      // width: 60%;
    }
    p {
      line-height: 36px;
      flex: 0.6;
      &:first-child {
        font-weight: 900;
      }
    }
  }
}
</style>

 