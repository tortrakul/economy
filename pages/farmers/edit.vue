<template>
  <div>
    <div class="container tile">
      <div class="content header">
        <h1>แก้ไขรายละเอียด</h1>
      </div>
      <!-- ข้อมูลส่วนตัว -->
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
              <option value>1</option>
              <option value>2</option>
              <option value>3</option>
              <option value>4</option>
              <option value>5</option>
              <option value>6</option>
              <option value>7</option>
              <option value>8</option>
              <option value>9</option>
              <option value>10</option>
              <option value>11</option>
              <option value>12</option>
              <option value>13</option>
              <option value>14</option>
              <option value>15</option>
              <option value>16</option>
              <option value>17</option>
              <option value>18</option>
              <option value>19</option>
              <option value>20</option>
              <option value>21</option>
              <option value>22</option>
              <option value>23</option>
              <option value>24</option>
              <option value>25</option>
              <option value>26</option>
              <option value>27</option>
              <option value>28</option>
              <option value>29</option>
              <option value>30</option>
              <option value>31</option>
            </select>

            <select>
              <option value="month">เดือน</option>
              <option value>มกราคม</option>
              <option value>กุมภาพันธ์</option>
              <option value>มีนาคม</option>
              <option value>เมษายน</option>
              <option value>พฤษภาคม</option>
              <option value>มิถุนายน</option>
              <option value>กรกฎาคม</option>
              <option value>สิงหาคม</option>
              <option value>กันยายน</option>
              <option value>ตุลาคม</option>
              <option value>พฤศจิกายน</option>
              <option value>ธันวาคม</option>
            </select>

            <select>
              <option value="year">ปี</option>
              <option value>2527</option>
              <option value>2528</option>
              <option value>2529</option>
              <option value>2530</option>
              <option value>2531</option>
              <option value>2532</option>
              <option value>2533</option>
              <option value>2534</option>
              <option value>2535</option>
              <option value>2536</option>
              <option value>2537</option>
              <option value>2538</option>
              <option value>2539</option>
              <option value>2540</option>
              <option value>2541</option>
              <option value>2542</option>
              <option value>2543</option>
              <option value>2544</option>
              <option value>2545</option>
              <option value>2546</option>
              <option value>2547</option>
              <option value>2548</option>
              <option value>2549</option>
              <option value>2550</option>
              <option value>2551</option>
              <option value>2552</option>
              <option value>2553</option>
              <option value>2554</option>
              <option value>2556</option>
              <option value>2557</option>
              <option value>2558</option>
              <option value>2559</option>
              <option value>2560</option>
              <option value>2561</option>
              <option value>2562</option>
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
      <!-- ที่อยู่ -->
      <div class="container register">
        <div class="data">
          <h1>ที่อยู่</h1>
        </div>
        <div class="input-wrapper">
          <label>ที่อยู่</label>
          <div class="overall">
            <input type="text" class="location">
          </div>
        </div>
        <div class="select-wrapper">
          <select>
            <option value="may">ตำบล</option>
          </select>

          <select>
            <option value="month">อำเภอ</option>
            <option value></option>
            <option value></option>
            <option value></option>
            <option value></option>
          </select>

          <select>
            <option value="year">จังหวัด</option>
            <option value></option>
            <option value></option>
            <option value></option>
            <option value></option>
          </select>

          <select>
            <option value="year">รหัสไปรษณีย์</option>
            <option value></option>
            <option value></option>
            <option value></option>
            <option value></option>
          </select>
        </div>
      </div>
      <!-- ข้อมูลทั่วไป -->
      <div class="container register">
        <div class="data">
          <h1>ข้อมูลทั่วไป</h1>
        </div>

        <div class="input-wrapper">
          <label>บัญชีธนาคาร</label>

          <div class="radio-wrapper">
            <div class="label-wrapper">
              <label>
                <input type="radio" name="gender">
              </label> บัญชีพร้อมเพล์
            </div>

            <div class="label-wrapper">
              <label>
                <input type="radio" name="gender">
              </label> บัญชีธนาคาร
            </div>
          </div>
          <input type="text" class="location" placeholder="บัญชีพร้อมเพย์">
        </div>
      </div>
      <!-- บัญชีผู้ใช้งาน -->
      <div class="container register">
        <div class="data">
          <h1>บัญชีผู้ใช้งาน</h1>
        </div>

        <div class="input-wrapper">
          <div class="label">
            <label>รูปภาพประจำตัว</label>
          </div>
          <button class="button-input">อัพโหลดรูปภาพ</button>
        </div>

        <div class="input-wrapper">
          <div class="label">
            <div class="icon mail"></div>
            <label>อีเมล</label>
          </div>
          <input type="text">
        </div>

        <div class="input-wrapper">
          <div class="label">
            <div class="icon address"></div>
            <label>ชื่อผู้ใช้</label>
          </div>
          <input type="text">
        </div>

        <div class="input-wrapper">
          <div class="label">
            <div class="icon password"></div>
            <label>รหัสผู้ใช้งาน</label>
          </div>
          <input type="text">
        </div>

        <div class="input-wrapper">
          <div class="label">
            <div class="icon password"></div>
            <label>ยืนยัน รหัสผู้ใช้งาน</label>
          </div>
          <input type="text">
        </div>
      </div>

      <div class="container register">
        <div class="checkbox-wrapper">
          <label>
            <input type="checkbox" class="checkbox">
          </label>ยอมรับข้อเสนอในการสมัครสมาชิก
        </div>
        <div class="checkbox-wrapper">
          <a href>ยกเลิก</a>
          <button class="button-output">บันทึก</button>
        </div>
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
.data {
  border-bottom: 1px solid $dark;
}
.header {
  padding: 16px 24px;
  border-bottom: 1px solid $border-color;
}
h1 {
  font-weight: 900;
}
.register {
  padding: 36px;
  padding-bottom: 0;
  margin: 0 76px;
  .input-wrapper {
    display: flex;
    justify-content: space-between;
    margin: 15px 0;
    .label {
      margin: auto 0;
      display: flex;
      i {
        vertical-align: middle;
      }
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
        border-radius: 4px;
        border: 1px solid $table-border;
        font-family: "Noto Sans Thai", sans-serif;
        text-align: center;
        text-align-last: center;
      }
    }
  }
  .overall {
    display: flex;
    flex-direction: column;
    width: 50%;
    .location {
      width: 100%;
    }
  }
  .select-wrapper {
    flex-wrap: wrap;
    padding-left: 50%;
    span {
      text-align: center;
    }
    select {
      width: 49.3%;
      height: 32px;
      outline: none;
      margin-bottom: 15px;
      border-radius: 4px;
      border: 1px solid $table-border;
      font-family: "Noto Sans Thai", sans-serif;
      text-align: center;
      text-align-last: center;
    }
  }
  .radio-wrapper {
    width: 22%;
    margin-left: 17%;
    .topic {
      margin: 3px;
    }
    input[type="radio"] {
      width: 8%;
      vertical-align: middle;
    }
  }
  .checkbox-wrapper {
    text-align: center;
    margin-bottom: 16px;
    a {
      color: $dark;
    }
    .checkbox {
      width: 2%;
      vertical-align: middle;
      text-align: center;
      margin-right: 5px;
    }
    .button-output {
      width: 120px;
      height: 40px;
      margin-left: 20px;
      border-radius: 25px;
      outline: none;
      border: none;
      background-image: linear-gradient(to right, #6ac85b, #dbed02);
      color: $white;
      font-family: "Noto Sans Thai", sans-serif;
      cursor: pointer;
      &:hover {
        opacity: 0.5;
      }
    }
  }
}
.icon {
  background-color: $dark;
  margin: auto 5px;
  margin-left: 0;
  height: 21px;
  width: 21px;
}
.mail {
  mask: url(/svg/mail.svg) no-repeat;
}
.address {
  mask: url(/svg/farmer.svg) no-repeat;
}
.password {
  mask: url(/svg/password.svg) no-repeat;
}
</style>
  

