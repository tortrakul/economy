<template>
  <div class="wrapper">
    <nuxt-link to="/customers/detail">
      <div :class="['container', status === 'ออร์เดอร์ไหม่' ? 'new-order' : '']">
        <div class="border"></div>
        <div class="icon">
          <div class="basket-icon">
            <div class="icon-detail"></div>
          </div>
        </div>
        <div class="content">
          <span>Order no. {{number}}</span>
          <div class="detail">
            <p>{{status}}</p>
            <p>{{price}} บาท</p>
          </div>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: ["number", "status", "price"]
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";
@import "@/assets/scss/_responsive.scss";
.wrapper {
  a {
    color: $dark;
    text-decoration: none;
  }
  .container {
    //not new order here
    display: flex;
    height: 86px;
    .border {
      height: 86px;
      width: 10px;
    }
    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 25%;
      .basket-icon {
        height: 40px;
        width: 40px;
        background-color: $white;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .icon-detail {
        mask: url(/svg/box.svg) no-repeat;
        background-color: $dark;
        width: 26px;
        height: 28px;
      }
    }
    .content {
      padding: 8px 16px;
      border-bottom: 1px solid $border-color;
      .detail {
        display: flex;
        justify-content: space-between;
      }
    }
    span {
      font-size: 15px;
      color: $subtext-color;
    }
    p {
      font-size: 14px;
      color: $primary;
    }

    &.new-order {
      display: flex;
      background-color: rgba(145, 201, 98, 0.1);
      height: 86px;
      .border {
        background-color: $certified-organic;
        height: 86px;
        width: 10px;
      }
      .icon-detail {
        mask: url(/svg/basket.svg) no-repeat;
        background-color: $dark;
        width: 26px;
        height: 28px;
      }
    }
  }
}
</style>