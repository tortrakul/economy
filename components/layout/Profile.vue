<template>
    <div class="card">
        <div class="card-body d-flex flex-column">
            <Media
                :id="$auth.user.id"
                model="user"
                index="0"
                :media="$auth.user.avatar"
                :callback="() => $auth.fetchUser()"
                class="mx-auto mb-2 w-50" />

            <p class="mb-0 lead text-center">{{ $auth.user.name }}</p>
        </div>

        <div class="card-footer bg-white">
            <router-link to="/profile" class="d-flex justify-content-center align-items-center">
                <Edit class="mr-1" /> แก้ไข
            </router-link>
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
