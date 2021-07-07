<template>
  <section class="container tile">
    <h1>รายชื่อเกษตรกร</h1>
    <div class="container search">
      <div class="title">
        <button>
          <a href>
            <i class="material-icons">add</i>เพิ่มรายการ
          </a>
        </button>
      </div>
      <div class="content">
        <img src="/svg/search.svg">
        <input placeholder="ค้นหา">
      </div>
      <div class="content-filter">
        <div class="filter"></div>
      </div>
    </div>
    <nuxt-link to="/farmers/detail">
      <div class="customer-lists">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </nuxt-link>
  </section>
</template>

<script>
import Card from "~/components/cardFarmer";

export default {
  components: {
    Card
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";
a {
  text-decoration: none;
  color: $dark;
}
.container {
  .customer-lists {
    display: flex;
    flex-wrap: wrap;
  }
  .search {
    display: flex;
    button {
      width: 140px;
      height: 40px;
      border-radius: 30px;
      border: none;
      background-image: linear-gradient(to right, #6ac85b, #dbed02);
      font-family: "Noto Sans Thai", sans-serif;
      margin: 8px;
      i {
        vertical-align: middle;
      }
      a {
        color: $white;
        text-decoration: none;
      }
    }
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
        top: 37.7%;
        left: 1.5%;
        &:hover {
        }
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
}
</style>