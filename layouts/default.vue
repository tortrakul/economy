<template>
  <div class="container">
    <Navbar/>
    <div class="layout">
      <div class="sidebar">
        <Profile/>
        <MenuList/>
      </div>
      <div class="content">
        <nuxt/>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from "~/components/layout/navbar";
import MenuList from "~/components/layout/menuList";
import Profile from "~/components/layout/profile";

export default {
  components: {
    Navbar,
    MenuList,
    Profile
  }
};
</script>
<style lang="scss">
@import "../assets/typeface/NotoSansThai.css";
@import "@/assets/scss/style.scss";
@import "@/assets/scss/_responsive.scss";
html {
  font-family: $font-family;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

body {
  font-family: $font-family;
  background-color: $light-gray;
}
.layout {
  display: flex;
  justify-content: flex-start;
  width: 100%;
  margin: 24px 0 auto 0;
  flex-wrap: wrap;
  @include respond-to($below-desktop) {
    flex-direction: column;
  }
  .sidebar {
    width: 20%;
    padding-right: 12px;
    @include respond-to($below-desktop) {
      display: none;
    }
  }
  .content {
    flex: 1;
    padding-left: 12px;
  }
}
</style>
