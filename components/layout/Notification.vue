<template>
  <div class="container-wrapper">
    <div class="container tile">
      <div class="topic">
        <h1>การแจ้งเตือน</h1>
      </div>
      <div class="icon-wrapper">
        <div class="">
          <a href>
            <i class="material-icons"></i>
            <label>ดูทั้งหมด</label>
          </a>
        </div>
        <div class="view">
          <a href>
            <i class="material-icons"></i>
            <label>ปิดทั้งหมด</label>
          </a>
        </div>
      </div>
      <div class="noti-card">
        <newOrder
          v-for="(order,index) in orders"
          :key="index"
          :number="order.orderNumber"
          :status="order.status"
          :price="order.price"
        />
      </div>
    </div>
  </div>
</template>

<script>

import newOrder from "~/components/layout/newOrder";
// import oldOrder from "~/components/layout/oldOrder";
export default {
  components: {
    newOrder,
    // oldOrder
  },
  data() {
    return {
      orders: [
        {
          orderNumber: "000040",
          status: "ออร์เดอร์ไหม่",
          price: "220"
        },
        {
          orderNumber: "000041",
          status: "ออร์เดอร์ไหม่",
          price: "260"
        },
        {
          orderNumber: "000042",
          status: "ออร์เดอร์ไหม่",
          price: "300"
        },
        {
          orderNumber: "000043",
          status: "จัดส่งแล้ว",
          price: "300"
        },
        {
          orderNumber: "000044",
          status: "จัดส่งแล้ว",
          price: "300"
        },
        // {
        //   orderNumber: "000045",
        //   status: "จัดส่งแล้ว",
        //   price: "300"
        // }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";
@import "@/assets/scss/_responsive.scss";
.container-wrapper {
  width: 30%;
  padding-left: 12px;
  padding-bottom: 15px;
  .tile {
    width: 100%;
    padding: 0;
    .topic {
      padding: 8px 16px;
    }
    .icon-wrapper {
      display: flex;
      padding: 8px 16px;
      justify-content: space-between;
      border-bottom: 1px solid $border-color;
      i {
        vertical-align: middle;
      }
      a {
        color: $dark;
        text-decoration: none;
        &:hover {
          color: $primary;
        }
      }
      .view {
        a {
          &:hover {
            color: $danger;
          }
        }
      }
    }
  }
}
</style>
