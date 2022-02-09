<template>
    <div>
        <OtopCard v-if="row" class="mb-3" />
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import OtopCard from '~/components/OtopCard';

export default {
    components: {
        OtopCard
    },
    methods: {
        ...mapActions({
            find: 'otop/find'
        })
    },
    computed: {
        ...mapState('otop', [
            'row'
        ])
    },
    mounted () {
        this.find(this.$route.params.id)
    }
}
</script>
