import Vue from 'vue'
import moment from 'moment'

Vue.filter('date', function (value) {
    return moment(String(value)).lang('th').add(543, 'years').format('LL')
})
