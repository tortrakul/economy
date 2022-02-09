<template>
    <div class="card card-body px-4">
        <nuxt-link to="/" exact-path class="d-flex align-items-center py-2">
            <Home class="mr-3" style="width: 18px; height: 18px;" /> หน้าแรก
        </nuxt-link>

        <nuxt-link v-if="!$auth.hasScope('admin')" :to="`/farmers/${$auth.user.id}`" class="d-flex align-items-center py-2">
            <Farmer class="mr-3" style="width: 18px; height: 18px;" /> ข้อมูลเกษตรกร
        </nuxt-link>

        <nuxt-link to="/shops" class="d-flex align-items-center py-2">
            <Basket class="mr-3" style="width: 18px; height: 18px;" /> รายชื่อร้านค้า OTOP
        </nuxt-link>

        <nuxt-link to="/otops" class="d-flex align-items-center py-2">
            <Basket class="mr-3" style="width: 18px; height: 18px;" /> รายชื่อสินค้า OTOP
        </nuxt-link>

        <nuxt-link to="/farms" class="d-flex align-items-center py-2">
            <Farm class="mr-3" style="width: 18px; height: 18px;" /> รายชื่อสวน
        </nuxt-link>

        <nuxt-link v-if="$auth.hasScope('admin')" to="/farmers" class="d-flex align-items-center py-2">
            <Farmer class="mr-3" style="width: 18px; height: 18px;" /> รายชื่อเกษตรกร
        </nuxt-link>

        <nuxt-link to="/products" class="d-flex align-items-center py-2">
            <Stock class="mr-3" style="width: 18px; height: 18px;" /> รายการผลผลิต
        </nuxt-link>

        <nuxt-link to="/expenses" class="d-flex align-items-center py-2">
            <List class="mr-3" style="width: 18px; height: 18px;" /> รายจ่าย
        </nuxt-link>
    </div>
</template>

<script>
import Home from '~/components/icons/Home';
import Basket from '~/components/icons/Basket';
import Stock from '~/components/icons/Stock';
import Farmer from '~/components/icons/Farmer';
import Farm from '~/components/icons/Farm';
import List from '~/components/icons/List';

export default {
    components: {
        Home,
        Basket,
        Stock,
        Farmer,
        Farm,
        List
    }
}
</script>
