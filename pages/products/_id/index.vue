<template>
    <div>
        <ProductCard v-if="row" class="mb-3" />

        <Comments v-if="row" :id="row.id" model="transaction" />
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Comments from '~/components/Comments';
import ProductCard from '~/components/ProductCard';

export default {
    components: {
        Comments,
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
