<template>
    <div>
        <ExpenseCard v-if="row" class="mb-3" />

        <Comments v-if="row" :id="row.id" model="transaction" />
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Comments from '~/components/Comments';
import ExpenseCard from '~/components/ExpenseCard';

export default {
    components: {
        Comments,
        ExpenseCard
    },
    methods: {
        ...mapActions({
            find: 'transaction/find'
        })
    },
    computed: {
        ...mapState('transaction', [
            'row'
        ])
    },
    mounted () {
        this.find(this.$route.params.id)
    }
}
</script>
