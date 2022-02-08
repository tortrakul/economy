<template>
    <div>
        <ShopCard v-if="row" class="mb-3" />

        <ShopLocation v-if="row" :key="`${row.lat},${row.lng}`" :lat="row.lat" :lng="row.lng" />
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import ShopCard from '~/components/ShopCard';
import ShopLocation from '~/components/ShopLocation';

export default {
    components: {
        ShopCard,
        ShopLocation
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
