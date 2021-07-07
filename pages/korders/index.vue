<template>
  <div>
    <div class="container tile">
      <h1>รายการสั่งซื้อทั้งหมด</h1>
      <div class="search">
        <div class="content">
          <img src="/svg/search.svg">
          <input placeholder="ค้นหา">
        </div>
        <div class="content-filter">
          <div class="filter"></div>
        </div>
      </div>
      <div class="order">
        <orderCard
          v-for="(order,index) in orders"
          :key="index"
          :number="order.Number"
          :status="order.status"
          :name="order.name"
          :calender="order.calender"
          :farm="order.farm"
        />
      </div>
    </div>
  </div>
</template>
<script>
import orderCard from "~/components/orderCard";

export default {
  components: {
    orderCard
  },
  data() {
    return {
      orders: [
        {
          Number: "20",
          status: "ชำระเงินแล้ว",
          name: "Some guy",
          calender: "12 เม.ย 2562",
          farm: "Some farm"
        },
        {
          Number: "21",
          status: "ยืนยันแล้ว",
          name: "Some guy",
          calender: "12 เม.ย 2562",
          farm: "Some farm"
        },
        {
          Number: "22",
          status: "จัดเตรียมสินค้า",
          name: "Some guy",
          calender: "12 เม.ย 2562",
          farm: "Some farm"
        },
        {
          Number: "23",
          status: "จัดส่งสินค้า",
          name: "Some guy",
          calender: "12 เม.ย 2562",
          farm: "Some farm"
        },
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";
@import "@/assets/scss/_responsive.scss";
.search {
  display: flex;

  .content {
    padding: 0;
    position: relative;
    input {
      width: 100%;
      height: 40px;
      border-radius: 30px;
      border: 0;
      font-family: "Noto Sans Thai", sans-serif;
      margin: 8px 0;
      box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.2);
      padding: 10px;
      padding-left: 30px;
      outline: none;
    }
    img {
      position: absolute;
      vertical-align: middle;
      margin: 0px;
      width: 15px;
      height: 15px;
      bottom: 20px;
      left: 11px;
    }
    a svg:hover {
      fill: $primary;
    }
  }
  .content-filter {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 67px;
    .filter {
      mask: url(/svg/Filter.svg) no-repeat;
      width: 22px;
      height: 22px;
      background-color: $dark;
      &:hover {
        background-color: $primary;
      }
    }
  }
}
.order {
  display: flex;
  flex-wrap: wrap;
}
</style>
