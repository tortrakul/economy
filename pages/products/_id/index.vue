<template>
    <div>
        <ProductCard v-if="row" />
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import ProductCard from '~/components/ProductCard';

export default {
    components: {
        ProductCard
    },
    methods: {
        ...mapActions({
            find: 'product/find'
        })
    },
    computed: {
        ...mapState('product', [
            'row'
        ])
    },
    mounted () {
        this.find(this.$route.params.id)
    }
}
</script>
