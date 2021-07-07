<template>
  <div>
    <div class="Farmer">
      <FarmerName/>
      <FarmerData
        name="Some name"
        id="9727525256141"
        address="ตู้ ปณ.72 จ. เชียงใหม่ อ.แม่วาง ต.บ้านกาด 50110"
        birhtday="21 มกราคม 2518"
        phone="xxxxxxxxxx"
        mail="mail@mail.com"
        bank="xxxxxxxxxx"
        line="juntoon.j"
      />
    </div>
    <FarmList/>
  </div>
</template>

<script>
import FarmerName from "~/components/friend/Farmers/FarmerName";
import FarmerData from "~/components/friend/Farmers/FarmerData";
import FarmList from "~/components/friend/Farmers/FarmList";
export default {
  components: {
    FarmerName,
    FarmerData,
    FarmList
  },
  data() {
    return {};
  }
};
</script>
<style>
.Farmer {
  display: flex;
}
</style>
