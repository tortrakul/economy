<template>
    <div class="card card-body px-4">
        <nuxt-link
            class="d-flex align-items-center py-2"
            v-for="(link, index) in links"
            :key="index"
            :to="{ path: link.path }">
            <component :is="link.icon" class="mr-3" style="width: 18px; height: 18px;" />
            {{link.name}}
        </nuxt-link>
    </div>
</template>

<script>
import Home from '~/components/icons/Home';
import Customer from '~/components/icons/Customer';
import Stock from '~/components/icons/Stock';
import Farmer from '~/components/icons/Farmer';
import Farm from '~/components/icons/Farm';
import List from '~/components/icons/List';

export default {
    components: {
        Home,
        Customer,
        Stock,
        Farmer,
        Farm,
        List
    },
    data() {
        return {
            links: [{
                name: 'หน้าหลัก',
                icon: 'Home',
                path: '/'
            }, {
                name: 'รายชื่อลูกค้า',
                icon: 'Customer',
                path: '/customers'
            }, {
                name: 'รายการสินค้า',
                icon: 'Stock',
                path: '/products'
            }, {
                name: 'รายชื่อเกษตรกร',
                icon: 'Farmer',
                path: '/farmers'
            }, {
                name: 'รายชื่อสวน',
                icon: 'Farm',
                path: '/farms'
            }, {
                name: 'รายการสั่งซื้อทั้งหมด',
                icon: 'List',
                path: '/orders'
            }]
        }
    }
}
</script>
