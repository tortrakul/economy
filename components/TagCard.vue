<template>
    <div class="card card-body p-2 shadow-sm">

        <div :class="`position-absolute px-3 py-1 bg-${this.tagClass} text-white`" style="top: -.5rem; right: -.5rem; border-top-right-radius: 1rem; border-bottom-left-radius: 1rem;">
            {{ tagLabel }}
        </div>

        <img :src="cover" class="rounded">

        <div class="p-2">
            <p class="mb-0 font-weight-bold">{{ title }}</p>
            <small class="text-muted">{{ subtitle }}</small>

            <div class="mt-2">
                <img :src="profile" width="32" height="32" class="mr-1 rounded-circle" />
                <small>{{ name }}</small>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['cover', 'title', 'subtitle', 'profile', 'name', 'tag-class', 'tag-label']
}
</script>
