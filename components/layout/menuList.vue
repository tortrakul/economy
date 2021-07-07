<template>
  <div class="wrapper">
    <div class="menu-card">
      <ul class="menu-list">
        <nuxt-link
          v-for="(link,index) in navLinks"
          :key="index"
          class="menu"
          :to="{ path: `${link.path}`}"
        >
          <div :class="`icon-nav-style ${link.icon}`"></div>
          <!-- <i class="material-icons">{{link.icon}}</i> -->
          {{link.name}}
        </nuxt-link>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      navLinks: [
        {
          name: "หน้าหลัก",
          icon: "icon-home",
          path: "/"
        },
        {
          name: "รายชื่อลูกค้า",
          icon: "icon-customers",
          path: "/customers"
        },
        {
          name: "รายการสินค้า",
          icon: "icon-stock",
          path: "/products"
        },
        {
          name: "รายชื่อเกษตรกร",
          icon: "icon-farmer",
          path: "/farmers"
        },
        {
          name: "รายชื่อสวน",
          icon: "icon-farm",
          path: "/farms"
        },
        {
          name: "รายการสั่งซื้อทั้งหมด",
          icon: "icon-list",
          path: "/korders"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";

.wrapper {
  padding: 0;
  width: 100%;
  .menu-card {
    border-radius: 15px;
    overflow: hidden;
    margin: 0;
    background-color: $white;
    border: 1px solid $border-color;
    ul.menu-list {
      padding: 0;
      .menu {
        color: $heading-color;
        text-align: left;
        padding: 14px 32px;
        display: flex;
        align-items: center;
        font-family: $font-family;
        text-decoration: none;
        outline: none;
        &:focus,
        &:active,
        &:hover {
          color: $primary;
        }
        .icon-nav-style {
          width: 1.2em;
          height: 1.2em;
          margin-right: 16px;
          display: inline-block;
          background-color: $dark;
          // background-repeat: no-repeat;
        }
        &:hover .icon-nav-style {
          background-color: $primary;
        }
        // .material-icons {
        //   margin-right: 16px;
        // }
      }
    }
  }
}
.icon-home {
  mask: url(/svg/Home.svg) no-repeat;
}
.icon-customers {
  mask: url(/svg/customers.svg) no-repeat;
}
.icon-stock {
  mask: url(/svg/stock.svg) no-repeat;
}
.icon-farmer {
  mask: url(/svg/farmer.svg) no-repeat;
}
.icon-farm {
  mask: url(/svg/farm.svg) no-repeat;
}
.icon-list {
  mask: url(/svg/list.svg) no-repeat;
}
</style>
