<template>
    <div class="card card-body p-2 shadow-sm">

        <div class="d-flex justify-content-center align-items-center w-100 overflow-hidden rounded" style="height: 150px; max-height: 150px;">
            <img :src="src" class="img-fluid rounded" />
        </div>

        <div class="d-flex flex-column p-2">
            <p class="mb-2 text-truncate">{{ title }}</p>

            <small class="text-muted" v-html="subtitle" />
        </div>
    </div>
</template>

<script>
export default {
    props: ['cover', 'title', 'subtitle'],
    computed: {
        src () {
            return this.cover ?? './assets/product.png'
        }
    }
}
</script>
