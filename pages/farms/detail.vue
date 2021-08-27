<template>
    <div>
        <FarmCard name="สวนกระท้อน" class="mb-3" />

        <FarmLocation />
    </div>
</template>

<script>
import FarmCard from '~/components/FarmCard';
import FarmLocation from '~/components/FarmLocation';

export default {
    components: {
        FarmCard,
        FarmLocation
    }
}
</script>
