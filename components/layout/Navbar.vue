<template>
    <b-navbar toggleable="lg" type="light" class="py-3 border-bottom">
        <div class="container">
            <b-navbar-toggle target="nav-collapse" class="border-0" />

            <b-navbar-nav class="flex-row ml-auto">
                <b-nav-item @click.prevent="logout" href="#" class="pl-4">
                    <span class="material-icons-outlined">power_settings_new</span>
                    <span class="d-none d-lg-inline-block">ออกจากระบบ</span>
                </b-nav-item>
            </b-navbar-nav>

            <b-collapse id="nav-collapse" is-nav style="display: none !important;">
                <b-navbar-nav>
                    <b-nav-item to="/" exact-path>หน้าหลัก</b-nav-item>
                    <b-nav-item :to="`/farmers/${$auth.user.id}`" v-if="!$auth.hasScope('admin')">ข้อมูลเกษตรกร</b-nav-item>
                    <b-nav-item to="/shops">รายชื่อร้านค้า OTOP</b-nav-item>
                    <b-nav-item to="/farms">รายชื่อสวน</b-nav-item>
                    <b-nav-item to="/farmers" v-if="$auth.hasScope('admin')">รายชื่อเกษตรกร</b-nav-item>
                    <b-nav-item to="/products">รายการผลผลิต</b-nav-item>
                    <b-nav-item to="/expenses">รายจ่าย</b-nav-item>
                    <b-nav-item to="/profile">แก้ไขโปรไฟล์</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </div>
    </b-navbar>
</template>

<script>
export default {
    methods: {
        async logout() {
            await this.$auth.logout()
            this.$router.push('/login')
        }
    }
}
</script>

<style>
.navbar-expand-lg .navbar-nav .dropdown-menu {
    position: absolute;
}
</style>
