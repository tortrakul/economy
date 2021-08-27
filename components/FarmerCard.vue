<template>
    <div class="card card-body p-2 shadow-sm">

        <img src="~/assets/img/farmer.jpg" class="rounded">

        <div class="p-2">
            <p class="d-flex align-items-center mb-2">
              <Farmer class="mr-1" style="width: 16px; height: 16px;" />

              <span class="text-truncate">ชื่อเกษตรกร นามสกุล</span>
            </p>
            <small class="d-flex align-items-center text-muted">
              <Phone class="mr-1" style="width: 16px; height: 16px;" /> 088 888 8888
            </small>
        </div>
    </div>
</template>

<script>
import Farmer from '~/components/icons/Farmer';
import Phone from '~/components/icons/Phone';

export default {
    components: {
        Farmer,
        Phone
    }
}
</script>
