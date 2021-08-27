<template>
    <div class="card card-body p-2 shadow-sm">

        <img :src="cover" class="rounded">

        <div class="p-2">
            <p class="d-flex align-items-center mb-2">{{ title }}</p>

            <small class="text-muted" v-html="subtitle" />
        </div>
    </div>
</template>

<script>
export default {
    props: ['cover', 'title', 'subtitle']
}
</script>
