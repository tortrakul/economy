<template>
  <div class="container tile">
    <div class="farmer name">
      <i class="material-icons"></i>
      <span>ชื่อลูกค้า นามสกุล</span>
    </div>
    <div class="farmer img">
      <img src="~/assets/img/farmer-img.jpg" alt>
    </div>
    <div class="farmer add-img">
      <a href>
        <i class="material-icons">add</i>
        <span>เพิ่มรูปโปรไฟล์</span>
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";
@import "@/assets/scss/_responsive.scss";

.tile {
  width: 35%;
  padding: 0;
}
.farmer {
  padding: 16px;
  font-size: 24px;
  text-align: center;
}
.name {
  padding: 8px 16px;
  i {
    vertical-align: middle;
    font-size: 24px;
    width: 16px;
  }
}
.img {
  padding: 0 16px;
  img {
    border-radius: 15px;
  }
}
.add-img {
  color: $subtext-color;
  i {
    vertical-align: middle;
  }
  a {
    color: $subtext-color;
    text-decoration: none;
  }
}
</style>
