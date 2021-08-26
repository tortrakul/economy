<template>
    <div class="card card-body px-4">
        <nuxt-link
            class="d-flex align-items-center py-2"
            v-for="(link, index) in links"
            :key="index"
            :to="{ path: link.path }">
            <img :src="link.icon" class="mr-3" width="24" height="24" />
            {{link.name}}
        </nuxt-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
            links: [{
                name: 'หน้าหลัก',
                icon: '/svg/Home.svg',
                path: '/'
            }, {
                name: 'รายชื่อลูกค้า',
                icon: '/svg/customers.svg',
                path: '/customers'
            }, {
                name: 'รายการสินค้า',
                icon: '/svg/stock.svg',
                path: '/products'
            }, {
                name: 'รายชื่อเกษตรกร',
                icon: '/svg/farmer.svg',
                path: '/farmers'
            }, {
                name: 'รายชื่อสวน',
                icon: '/svg/farm.svg',
                path: '/farms'
            }, {
                name: 'รายการสั่งซื้อทั้งหมด',
                icon: '/svg/list.svg',
                path: '/korders'
            }]
        }
    }
}
</script>
