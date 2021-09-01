<template>
    <div class="card card-body p-2 shadow-sm">

        <img :src="cover" class="rounded" />

        <div class="p-2">
            <p class="d-flex align-items-center mb-2">
              <Farmer class="mr-1" style="width: 16px; height: 16px;" />

              <span class="text-truncate">{{ farmer.name }}</span>
            </p>
            <small class="d-flex align-items-center text-muted">
              <Phone class="mr-1" style="width: 16px; height: 16px;" /> {{ farmer.tel }}
            </small>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import Farmer from '~/components/icons/Farmer';
import Phone from '~/components/icons/Phone';

export default {
    props: ['farmer'],
    components: {
        Farmer,
        Phone
    },
    computed: {
        cover () {
            return this.farmer.cover ?? '/assets/profile.jpg'
        }
    }
}
</script>
