<template>
  <section class="container tile">
    <h1>รายการสินค้า</h1>
    <div class="container search">
      <div class="title">
        <button>
          <a href>
            <i class="material-icons"></i>เพิ่มสินค้า
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
    <nuxt-link to="/products/detail">
      <div class="farm-lists">
        <!-- // ดึงตัวนี้ออกมาใช้ -->
        <TagCard v-for="(tag,index) in tags" :key="index" :tag="tag"/>
      </div>
    </nuxt-link>
  </section>
</template>

<script>
import TagCard from "~/components/productsCard";

export default {
  components: {
    TagCard
  },
  // ดึงตัวนี้ออกมาใช้
  data() {
    return {
      tags: [1, 2, 3, 4, 5]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";

a {
  color: $dark;
  text-decoration: none;
}
.container {
  .farm-lists {
    display: flex;
    flex-wrap: wrap;
  }
  .farm-lists {
    margin-top: 18px;
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