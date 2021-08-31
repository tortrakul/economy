import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyATrNe_Y8aCmmnCwYMMtkd-zhYuIS8acjs',
    libraries: 'places'
  }
})
