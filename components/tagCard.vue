<template>
  <div class="card-wrapper">
    <div class="card">
      <div
        :class="[
                    'badge',
                    tag === 1 ? 'certified-organic' : '' ||
                    tag === 2 ? 'organically-grown' : '' ||
                    tag === 3 ? 'pesticide-safe' : '' ||
                    tag === 4 ? 'hydroponic' : '' ||
                    tag === 5 ? 'general' : ''
                ]"
      >
        <span v-if="tag==1">Certified Organic</span>
        <span v-if="tag==2">Organically Grown</span>
        <span v-if="tag==3">Pesticide safe</span>
        <span v-if="tag==4">Hydroponics</span>
        <span v-if="tag==5">General</span>
      </div>
      <div class="img-wrapper">
        <img src="assets/Picture.png">
      </div>

      <div class="name">
        ชื่อสวน
        <div class="avatar-wrapper">
          <img src="assets/Picture.png">
        </div>
      </div>
      <h6 class="province">จังหวัด</h6>
      <div class="profile">
        <img src="~/assets/img/Picture.jpg">
        <span>ชื่อเจ้าของสวน</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["tag"]
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";
@import "@/assets/scss/_responsive.scss";

.card-wrapper {
  width: 20%;
  padding-right: 8px;
  .card {
    width: 100%;
    padding: 8px;
    box-shadow: $box-shadow;
    background-color: $white;
    border-radius: 15px 15px;
    position: relative;
    .img-wrapper {
      width: 100%;
      overflow: hidden;
      border-radius: 5px;
      img {
        width: 100%;
      }
    }
    .name {
      font-size: 16px;
      color: $text-color;
      position: relative;
      // padding-top: 18px;
      .avatar-wrapper {
        width: 40px;
        height: 40px;
        border: 2px solid $white;
        border-radius: 100%;
        overflow: hidden;
        position: absolute;
        right: 0px;
        top: -30px;
        img {
          width: 120%;
        }
      }
    }
    .province {
      font-size: 12px;
      color: $subtext-color;
    }
    .badge {
      display: inline-block;
      color: $white;
      padding: 6px 16px;
      border-radius: 0 15px;
      position: absolute;
      top: 0;
      right: 0;
      font-weight: bold;
      font-size: 10px;
      &.organically-grown {
        background-color: $organically-grown;
      }
      &.general {
        background-color: $general;
      }
      &.pesticide-safe {
        background-color: $non-pesticide;
      }
      &.certified-organic {
        background-color: $certified-organic;
      }
      &.hydroponic {
        background-color: $hydroponic;
      }
    }
    .profile {
      display: flex;
      margin-top: 12px;
      img {
        border-radius: 50%;
        width: 20%;
        height: 20%;
      }
      span {
        margin: auto 12px;
        font-size: 12px;
      }
    }
  }
}
</style>
