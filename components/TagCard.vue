<template>
    <div class="card card-body p-2 shadow-sm">

        <div v-if="tagLabel" :class="`position-absolute px-3 py-1 bg-${this.tagClass} text-white`" style="top: -.5rem; right: -.5rem; border-top-right-radius: 1rem; border-bottom-left-radius: 1rem;" v-html="tagLabel" :style="{ backgroundColor: tagColor }" />

        <div class="d-flex justify-content-center align-items-center w-100 overflow-hidden rounded" style="height: 150px; max-height: 150px;">
            <img :src="src" class="img-fluid rounded" />
        </div>

        <div class="d-flex flex-column p-2">
            <p class="mb-0 font-weight-bold text-truncate">{{ title }}</p>
            <small class="text-muted text-truncate">{{ subtitle }}</small>

            <div class="d-flex align-items-center mt-2">
                <img :src="avatar" width="32" height="32" class="mr-1 rounded-circle" />
                <small class="text-nowrap overflow-hidden text-truncate">{{ name }}</small>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['cover', 'title', 'subtitle', 'profile', 'name', 'tag-class', 'tag-color', 'tag-label'],
    computed: {
        src () {
            return this.cover ?? './assets/product.png'
        },
        avatar () {
            return this.profile ?? './assets/profile.jpg'
        }
    }
}
</script>
