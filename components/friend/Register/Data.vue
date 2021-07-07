<template>
  <div>
    <div class="content header">
      <h1>แก้ไขรายละเอียด</h1>
    </div>
    <div class="container register">
      <div class="data">
        <h1>ข้อมูลส่วนตัว</h1>
      </div>

      <div class="input-wrapper">
        <label>ชื่อ-นามสกุล</label>
        <input type="text">
      </div>
      <div class="dym">
        <label>วัน เดือน ปีเกิด</label>
        <div class="detail">
          <select>
            <option value="may">วัน</option>
            <option value></option>
            <option value></option>
            <option value></option>
            <option value></option>
          </select>
          <!-- </div> -->
          <!-- <div class="month set"> -->
          <select>
            <option value="month">เดือน</option>
            <option value></option>
            <option value></option>
            <option value></option>
            <option value></option>
          </select>
          <!-- </div> -->
          <!-- <div class="year set"> -->
          <select>
            <option value="year">ปี</option>
            <option value></option>
            <option value></option>
            <option value></option>
            <option value></option>
          </select>
        </div>
      </div>
      <div class="input-wrapper">
        <label>เลขบัตรประจำตัวประชาชน</label>
        <input type="number" step="1" min="1" class="number">
      </div>
      <div class="input-wrapper">
        <label>เบอร์โทรศัพท์</label>
        <input type="number" step="1" min="1" class="number">
      </div>
      <div class="input-wrapper">
        <label>ไลน์ไอดี</label>
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
  padding: 0;
}
label {
  margin: auto 0;
}
input {
}
.header {
  padding: 16px 24px;
  border-bottom: 1px solid $border-color;
}
.register {
  padding: 36px;
  margin: 0 76px;
}
.input-wrapper {
  display: flex;
  justify-content: space-between;
  margin: 15px 0;

  input {
  }
}
.dym {
  display: flex;
  justify-content: space-between;
  .detail {
    width: 64.8%;
    text-align: right;
    select {
      width: 25%;
      height: 32px;
      outline: none;
      padding-left: 40px;
      border-radius: 4px;
    }
  }
}
</style>
  