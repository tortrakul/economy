<script>
import { Line } from 'vue-chartjs'

export default {
    extends: Line,
    props: ['data'],
    mounted () {
        this.renderChart(this.data, {
            scales: {
                xAxes: [{
                    gridLines: {
                        display: false
                    }
                }],
                yAxes: [{
                    gridLines: {
                        display: true
                    }
                }]
            },
            legend: null,
            responsive: true,
            maintainAspectRatio: false,
        })
    }
}
</script>
