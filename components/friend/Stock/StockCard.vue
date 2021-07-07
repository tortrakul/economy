<template>
  <div>
    <div class="container tile">
      <div class="product name">
        <h1>
          <i class="material-icons"></i>แตงโมจินตรา
        </h1>
      </div>
      <div class="product main">
        <div class="product-img">
          <i class="material-icons main"></i>
          <img src="~/assets/img/Picture.jpg">
          <div class="cell-img">
            <div class="icon">
              <i class="material-icons cell"></i>
              <img src="~/assets/img/Picture.jpg">
            </div>
            <div class="icon">
              <i class="material-icons cell2"></i>
              <img src="~/assets/img/Picture.jpg">
            </div>
            <div class="icon">
              <img src="~/assets/img/Picture.jpg">
            </div>
          </div>
        </div>
        <div class="product-text">
          <div class="cell-content">
            <div class="text">
              <p>ชื่อสินค้า</p>
              <p>แตงโมจินตรา</p>
            </div>
            <div class="text">
              <p>จำนวน</p>
              <p>20 ลูก</p>
            </div>
            <div class="text">
              <p>น้ำหนัก</p>
              <p>ประมาณ 20kg</p>
            </div>
            <div class="text">
              <p>วันที่เก็บเกี่ยว</p>
              <p>4 เมษายน 2562</p>
            </div>
            <div class="text">
              <p>ราคา</p>
              <p>500 บาท</p>
            </div>
            <div class="text">
              <p>คำอธิบาย</p>
              <p>แตงโมจินตรา ลูกละ 25บาท</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

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
      bottom: 238px;
    }
    .cell {
      position: absolute;
      left: 315px;
      bottom: 238px;
    }
    .cell2 {
      position: absolute;
      left: 315px;
      bottom: 151px;
    }
    .cell-img {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin: 0 8px;
      width: 0px;
      img {
        height: 80px;
        width: 80px;
      }
    }
  }
  .product-text {
    width: 100%;

    .cell-content {
      margin-left: 130px;
      .text {
        display: flex;
      }
      p {
        line-height: 36px;
        flex: 0.6;
        &:first-child{
          font-weight: 900;
        }
      }
    }
  }
}
</style>

 