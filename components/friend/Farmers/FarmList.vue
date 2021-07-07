<template>
  <div>
    <div class="container tile">
      <div class="farm list">
        <h1>รายชื่อสวน</h1>
        <span>จำนวน 2 สวน</span>
      </div>
      <div class="farm name">
        <div class="farm-name card">
          <i class="material-icons"></i>
          <span>ฟาร์มสุขสันชาวสวน</span>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";
@import "@/assets/scss/_responsive.scss";

.tile {
  width: 100%;
  margin-top: 24px;
  padding: 0;
}
i {
  vertical-align: middle;
}
.farm {
  display: flex;
  justify-content: space-between;
  padding: 8px 16px;
}
.list {
  border-bottom: 1px solid $border-color;
  span {
    margin: auto 0;
  }
}
.card {
  background-color: $light-gray;
  padding: 8px;
  span {
  }
}
</style>