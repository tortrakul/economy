<template>
  <div class="card card-body">
    <h5 class="card-title">ตำแหน่งร้านค้า OTOP</h5>

    <GmapMap
        :center="center"
        :zoom="16"
        style="height: 300px">
        <GmapMarker :position="center" />
    </GmapMap>
  </div>
</template>

<script>
export default {
  props: ['lat', 'lng'],
  data: () => ({
    center: { lat: null, lng: null }
  }),
  mounted () {
    this.center = {
      lat: parseFloat(this.lat),
      lng: parseFloat(this.lng)
    }
  }
}
</script>
