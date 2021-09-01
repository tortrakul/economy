<template>
    <div>
        <ProductCard v-if="row" class="mb-3" />

        <div class="card card-body">
            <h5 class="card-title">รายละเอียดเพิ่มเติม</h5>

            <textarea class="form-control mb-3" rows="5"></textarea>

            <div class="d-flex justify-content-between">
                <a class="btn btn-link" href="#">
                    <span class="material-icons-outlined">photo_camera</span>
                    เพิ่มรูป
                </a>

                <a class="btn btn-gradient-primary px-4" href="#">ส่ง</a>
            </div>
        </div>
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
