<template>
    <b-navbar toggleable="lg" type="light" class="py-3 border-bottom">
        <div class="container">
            <b-navbar-toggle target="nav-collapse" class="border-0" />

            <b-navbar-nav class="flex-row ml-auto">
                <b-nav-item-dropdown right no-caret>
                    <template #button-content>
                        <span class="material-icons text-success" style="font-size: 8px;">circle</span>
                        <span class="material-icons-outlined">notifications</span>
                        <span class="d-none d-lg-inline-block">แจ้งเตือน</span>
                    </template>

                    <Notification />
                </b-nav-item-dropdown>

                <b-nav-item href="#" class="pl-4">
                    <span class="material-icons-outlined">power_settings_new</span>
                    <span class="d-none d-lg-inline-block">ออกจากระบบ</span>
                </b-nav-item>
            </b-navbar-nav>

            <b-collapse id="nav-collapse" is-nav style="display: none !important;">
                <b-navbar-nav>
                    <b-nav-item href="#">หน้าหลัก</b-nav-item>
                    <b-nav-item href="#">รายชื่อลูกค้า</b-nav-item>
                    <b-nav-item href="#">รายการสินค้า</b-nav-item>
                    <b-nav-item href="#">รายชื่อเกษตรกร</b-nav-item>
                    <b-nav-item href="#">รายชื่อสวน</b-nav-item>
                    <b-nav-item href="#">รายการสั่งซื้อทั้งหมด</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </div>
    </b-navbar>
</template>

<script>
import Notification from '~/components/layout/Notification';

export default {
    components: {
        Notification
    }
}
</script>

<style>
.navbar-expand-lg .navbar-nav .dropdown-menu {
    position: absolute;
}
</style>
