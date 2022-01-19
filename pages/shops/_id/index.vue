<template>
    <div>
        <ShopCard v-if="row" class="mb-3" />

        <FarmLocation v-if="row" :key="`${row.lat},${row.lng}`" :lat="row.lat" :lng="row.lng" />
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import ShopCard from '~/components/ShopCard';
import FarmLocation from '~/components/FarmLocation';

export default {
    components: {
        ShopCard,
        FarmLocation
    },
    methods: {
        ...mapActions({
            find: 'shop/find'
        })
    },
    computed: {
        ...mapState('shop', [
            'row'
        ])
    },
    mounted () {
        this.find(this.$route.params.id)
    }
}
</script>
