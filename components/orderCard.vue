<template>
  <div class="wrapper">
    <div class="container tile">
      <div
        :class="['menu-table',
       status === 'ชำระแล้ว' ? 'paid' : ''||
       status === 'ยืนยันแล้ว' ? 'confirm' : ''||
       status === 'จัดเตรียมสินค้า' ? 'prepare' : ''||
       status === 'จัดส่งสินค้า' ? 'sent' : ''
      ]"
      >
        <div class="cell-table index">
          <img src="/svg/index.svg">
          <label>{{number}}</label>
        </div>
        <div class="cell-table pay">
          <button>
            <div class="icon"></div>
            {{status}}
          </button>
        </div>
        <div class="cell-table name">
          <label>{{name}}</label>
        </div>
        <div class="cell-table calender">
          <img src="/svg/calender.svg">
          <label>{{calender}}</label>
        </div>
        <div class="cell-table farm">
          <img src="/svg/farm.svg">
          <label>{{farm}}</label>
        </div>
      </div>
      <hr>
      <div class="price">
        <div class="price-tag">
          <img src="/svg/tag.svg">
          <p>ราคารวม</p>
        </div>
        <div class="price-baht">
          <p>630</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["img", "number", "status", "name", "calender", "farm"]
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";
@import "@/assets/scss/_responsive.scss";
.wrapper {
  padding: 8px;
  width: 100%;
  .tile {
    width: 100%;
    margin-top: 16px;
    padding: 0;

    .menu-table {
      display: flex;
      flex-wrap: wrap;
      padding: 16px 16px;
      padding-bottom: 0;
      .cell-table {
        width: 50%;
        height: fit-content;
        margin-bottom: 8px;
        color: $subtext-color;
      }
      .icon {
        mask: url(/svg/price.svg) no-repeat;
        display: inline-block;
        width: 19px;
        height: 19px;
        background-color: $white;
        vertical-align: middle;
      }
      .index {
        vertical-align: middle;
        height: 35px;
        padding-top: 3px;
        p {
          margin: auto 0;
          font-size: 18px;
        }
      }
      .pay {
        text-align: right;
        height: 40px;
        button {
          background-color: $sent;
          border: none;
          border-radius: 30px;
          height: 100%;
          width: 35%;
          color: $white;
          font-family: "Noto Sans Thai", sans-serif;
          outline: none;
          &:hover {
            background-color: tint($sent, 25%);
          }
        }
        img {
          vertical-align: middle;
        }
      }
      &.paid {
        button {
          background-color: $confirm;
          &:hover {
            background-color: tint($confirm, 25%);
          }
        }

        .icon {
          mask: url(/svg/confirm.svg) no-repeat;
          display: inline-block;
          width: 20px;
          height: 24px;
          margin-right: 4px;
        }
      }

      &.confirm {
        button {
          background-color: $confirm;
          &:hover {
            background-color: tint($confirm, 25%);
          }
        }

        .icon {
          mask: url(/svg/confirm.svg) no-repeat;
          display: inline-block;
          width: 20px;
          height: 24px;
          margin-right: 4px;
        }
      }

      &.prepare {
        button {
          background-color: $prepare;
          &:hover {
            background-color: tint($prepare, 25%);
          }
        }

        .icon {
          mask: url(/svg/box.svg) no-repeat;
          display: inline-block;
          width: 19px;
          height: 19px;
          margin-right: 4px;
        }
      }

      &.sent {
        button {
          background-color: $transport;
          &:hover {
            background-color: tint($transport, 25%);
          }
        }
        .icon {
          mask: url(/svg/car.svg) no-repeat;
          display: inline-block;
          width: 27px;
          height: 19px;
          margin-right: 4px;
        }
      }

      .name {
        width: 100%;
        color: $dark;
      }
      .farm {
        text-align: right;
        font-size: 12px;
        img {
          width: 13px;
          height: 23px;
          vertical-align: middle;
        }
      }
      .calender {
        font-size: 12px;
        margin: auto;
        img {
          width: 14px;
          height: 14px;
          vertical-align: middle;
        }
      }
    }

    hr {
      border: 0.5px solid $border-color;
    }
    .price {
      padding: 16px 16px;
      display: flex;
      justify-content: space-between;
      .price-tag {
        font-size: 12px;
        display: flex;
        p {
          margin: auto 0;
          color: $subtext-color;
        }
        img {
          width: 24px;
          height: 24px;
          vertical-align: middle;
          margin-right: 3px;
        }
      }
    }
  }
}
</style>

