<template>
    <div>
        <div class="container pt-5">
            <Nuxt />
        </div>
    </div>
</template>

<script>
export default {
    middleware: 'auth'
}
</script>
