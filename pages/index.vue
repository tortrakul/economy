<template>
  <div class="container">
    <div class="content">
      <WeatherReport/>
      <weather_overall/>
    </div>
    <Notification/>
  </div>
</template>

<script>
import WeatherReport from "~/components/weatherReport";
import weather_overall from "~/components/friend/Dashboard/weather_overall";
import Notification from "~/components/layout/Notification";

export default {
  components: {
    WeatherReport,
    weather_overall,
    Notification
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";
@import "@/assets/scss/_responsive.scss";
.container {
  display: flex;
  .content {
    padding-right: 12px;
    padding-left: 0;
  }
}
</style>