<template>
    <div class="card">
        <div class="card-body d-flex flex-column">
            <img :src="$auth.user.avatar" class="mx-auto mb-2 w-50 img-fluid rounded-circle">
            <p class="mb-0 lead text-center">{{ $auth.user.name }}</p>
        </div>

        <div class="card-footer bg-white">
            <a href="#" class="d-flex justify-content-center align-items-center">
                <Edit class="mr-1" /> แก้ไข
            </a>
        </div>
    </div>
</template>

<script>
import Edit from '~/components/icons/Edit';

export default {
    components: {
        Edit
    }
}
</script>
