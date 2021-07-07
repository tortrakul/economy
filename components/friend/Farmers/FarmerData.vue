<template>
  <div class="main-container">
    <div class="container tile">
      <div class="farmer header">
        <h1>ข้อมูลเกษตรกร</h1>
        <div class="icon wrapper">
          <div class="icon edit">
             <nuxt-link to="edit">
              <img src="~/static/svg/edit.svg" alt>
              <span>แก้ไขรายละเอียดสินค้า</span>
             </nuxt-link>
          </div>
          <div class="icon trash">
            <a href>
              <img src="~/static/svg/trashcan.svg" alt>
              <span>ลบลายชื่อ</span>
            </a>
          </div>
        </div>
      </div>
      <div class="farmer content">
        <div class="cell-content">
          <div class="text">
            <p>ชื่อ</p>
            <p>{{name}}</p>
          </div>
          <div class="text">
            <p>เลขประจำตัวประชาชน</p>
            <p>{{id}}</p>
          </div>
          <div class="text">
            <p>ที่อยู่</p>
            <p>{{address}}</p>
          </div>
          <div class="text">
            <p>วันเกิด</p>
            <p>{{birhtday}}</p>
          </div>
          <div class="text">
            <p>เบอร์โทรศัพท์</p>
            <p>{{phone}}</p>
          </div>
          <div class="text">
            <p>อีเมล</p>
            <p>{{mail}}</p>
          </div>
          <div class="text">
            <p>พร้อมเพล์</p>
            <p>{{bank}}</p>
          </div>
          <div class="text">
            <p>ไลน์ไอดี</p>
            <p>{{line}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props:["name","id","address","birhtday","phone","mail","bank","line"]
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";
@import "@/assets/scss/_responsive.scss";
.main-container {
  width: 100%;
}
.tile {
  width: 97%;
  margin-left: 24px;
  padding: 0;
}
.farmer {
  padding: 16px;
}
.icon {
  padding: 0 16px;
  padding-right: 0;
}
.header {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid $border-color;
  padding: 8px 16px;
  .wrapper {
    display: flex;
    margin: auto 0;
  }
  h1 {
    font-size: 24px;
  }
  .trash {
    a {
      color: $danger;
      text-decoration: none;
    }
    img {
      vertical-align: middle;
    }
  }
  .edit {
    a {
      color: $subtext-color;
      text-decoration: none;
    }
    img {
      vertical-align: middle;
    }
  }
}
.content {
  .text {
    display: flex;
  }
  p {
    line-height: 36px;
    flex: 0.6;
    &:first-child {
      font-weight: 900;
    }
  }
}
</style>