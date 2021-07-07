<template>
  <div class="card-wrapper">
    <div class="card">
      <div class="img-wrapper">
        <img src="~/assets/img/customer.jpg">
      </div>
      <div class="status-wrapper">
        <p class="status name">
          <img class="icon" src="~/static/svg/farmer.svg">
          ชื่อลูกค้า นามสกุล
        </p>
        <p class="status phone">
          <img class="icon" src="~/static/svg/phone.svg">
          088 888 8888
        </p>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";
@import "@/assets/scss/_responsive.scss";

.card-wrapper {
  padding: 4px 8px;
  width: 25%;
  // &:nth-child(5n) {
  //   padding-right: 0;
  //   width: 25%;
  // }
  // &:nth-child(1n + 1) {
  //   padding-left: 0;
  //   width: 25%;
  // }
  // @include respond-to($phone) {
  //   width: 50%;
  //   &:nth-child(2n) {
  //     padding-right: 0;
  //   }
  //   &:nth-child(1n + 1) {
  //     padding-left: 0;
  //   }
  // }

  // width: 33.33%;
  // &:nth-child(3n) {
  //   padding-right: 0;
  // }
  // &:nth-child(1n + 1) {
  //   padding-left: 0;
  // }
}
// @include respond-to($tablet-landscape) {
//   width: 25%;
//   &:nth-child(4n) {
//     padding-right: 0;
//   }
//   &:nth-child(1n + 1) {
//     padding-left: 0;
//   }
// }
.card {
  width: 100%;
  padding: 12px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  border-radius: 15px 15px;
  .img-wrapper {
    width: 100%;
    overflow: hidden;
    border-radius: 5px;
    img {
      width: 100%;
    }
  }
  .status-wrapper {
    margin: 8px;
    .name {
      font-size: 16px;
      color: $text-color;
    }

    .icon {
      width: 15px;
      vertical-align: middle;
    }
    .status {
      padding: 5px 0;
    }
  }
}
</style>
