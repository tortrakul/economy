<template>
    <div>
        <WeatherReport class="mb-3" />

        <AccountSummary class="mb-3" />

        <WeatherOverall />
    </div>
</template>

<script>
import WeatherReport from '~/components/WeatherReport';
import AccountSummary from '~/components/AccountSummary';
import WeatherOverall from '~/components/WeatherOverall';

export default {
    components: {
        WeatherReport,
        AccountSummary,
        WeatherOverall
    }
}
</script>
