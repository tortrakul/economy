<template>
  <div>
    <div class="container tile">
      <div class="header comment">
        <h1>ความคิดเห็น</h1>
      </div>
      <div class="box comment">
        <div class="box-card"></div>
      </div>
      <div class="footer comment">
        <div class="text-comment">
          <a href>
            <i class="material-icons"></i>
            <span>เพิ่มรูป</span>
          </a>
        </div>
        <button class="button-sub">ส่ง</button>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";
@import "@/assets/scss/_responsive.scss";

.tile {
  padding: 0;
  margin-top: 24px;
}
.comment {
  padding: 16px;
}
.box {
  padding: 0 16px;
  .box-card {
    background-color: $light-gray;
    width: 100%;
    height: 171px;
  }
}
.footer {
  display: flex;
  justify-content: space-between;
  .text-comment {
    margin: auto 0;
    i {
      vertical-align: middle;
    }
    a{
      color: $dark;
      text-decoration: none;
    }
  }
  button {
    width: 160px;
    height: 40px;
    border-radius: 30px;
    border: none;
    background-image: linear-gradient(to right, #6ac85b, #dbed02);
    color: $white;
    font-family: "Noto Sans Thai", sans-serif;
  }
}
</style>