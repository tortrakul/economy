<template>
  <div>
    <div class="container register">
      <div class="data">
        <h1>ที่อยู่</h1>
      </div>

      <div class="name flex">
        <p>ชื่อ-นามสกุล</p>
        <input type="text">
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";

.number::-webkit-inner-spin-button,
.number::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.tile {
  // padding: 0;
}

input[type="text"] {
  width: 50%;
}
input[type="number"] {
  width: 50%;
}
.header {
  padding: 16px 24px;
  border-bottom: 1px solid $border-color;
}
.register {
  padding: 36px;
  margin: 0 76px;
  p {
    flex: 0.9999;
  }
  .flex {
    display: flex;
    margin: 15px 0;
  }
}
</style>
  