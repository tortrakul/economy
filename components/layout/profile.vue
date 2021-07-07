<template>
  <div class="container-wrapper">
    <div class="container">
      <div class="profile img">
        <img class="profile-img" src="~/assets/img/Picture.jpg">
      </div>
      <div class="bg">
        <div class="profile text">
          <p>แอดมิน</p>
          <p>Admin</p>
        </div>
        <div class="profile edit">
          <a href>
            <img class="icon-edit" src="~/static/svg/edit.svg">
            <span>แก้ไข</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";
@import "@/assets/scss/_responsive.scss";

.container {
  height: 256px;
  padding: 0;
}
.bg {
  position: relative;
  background-color: $white;
  height: 166px;
  top: -74px;
  z-index: -1;
  padding-top: 74px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border: 1px solid $border-color;
  border-radius: 15px;
}
.profile {
  text-align: center;
  .profile-img {
    width: 8rem;
  }
  img {
    border-radius: 50%;
  }
}
.text {
  border-bottom: 1px solid $border-color;
}
.edit {
  padding: 8px;
  a {
    color: $dark;
    text-decoration: none;
  }
  .icon-edit {
    vertical-align: middle;
    border-radius: 0;
  }
}
</style>