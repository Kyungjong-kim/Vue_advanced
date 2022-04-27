<template>
      <canvas ref="barChart" width="400" height="400" id="barChart"></canvas>
</template>

<script>
export default {
  props: ['propsdata'],
  mounted() {
    var ctx = this.$refs.barChart;
    var barChart = new this.$_Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: this.propsdata 
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
    console.log(barChart);
  }
}
</script>

<style>

</style>