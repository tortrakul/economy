<template>
    <div class="mb-5">
        <Navbar />

        <div class="container pt-5">
            <div class="row">
                <div class="d-none d-lg-block col-3">
                    <Profile class="mb-3" />
                    <MenuList />
                </div>

                <div class="col-12 col-lg-9">
                    <Nuxt />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Navbar from '~/components/layout/Navbar';
import Profile from '~/components/layout/Profile';
import MenuList from '~/components/layout/MenuList';

export default {
    middleware: 'auth',
    components: {
        Navbar,
        Profile,
        MenuList
    }
}
</script>
