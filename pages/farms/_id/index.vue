<template>
    <div>
        <FarmCard v-if="row" class="mb-3" />

        <FarmLocation v-if="row" :key="`${row.lat},${row.lng}`" :lat="row.lat" :lng="row.lng" />
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import FarmCard from '~/components/FarmCard';
import FarmLocation from '~/components/FarmLocation';

export default {
    components: {
        FarmCard,
        FarmLocation
    },
    methods: {
        ...mapActions({
            find: 'farm/find'
        })
    },
    computed: {
        ...mapState('farm', [
            'row'
        ])
    },
    mounted () {
        this.find(this.$route.params.id)
    }
}
</script>
