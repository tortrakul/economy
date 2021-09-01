<template>
    <div class="card">
        <div class="card-body d-flex flex-column">
            <Media
                :key="$auth.user.avatar_id"
                :src="$auth.user.avatar"
                :id="$auth.user.id"
                model="user"
                index="0"
                :media-id="$auth.user.avatar_id"
                :callback="() => $auth.fetchUser()"
                class="mx-auto mb-2 w-50" />

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
import Media from '~/components/Media'

export default {
    components: {
        Edit
    }
}
</script>
