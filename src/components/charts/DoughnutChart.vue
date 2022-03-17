<script setup lang="ts">
import { computed } from "vue";
import { DoughnutChart } from "vue-chart-3";
import { Chart, registerables } from "chart.js";

interface IDoughnutChartProps {
  labels: string[];
  data: number[];
  colors: string[];
}

const props = defineProps<IDoughnutChartProps>();

Chart.register(...registerables);

const data = computed(() => ({
  labels: props.labels,

  datasets: [
    {
      label: "Porcentagem",
      data: props.data,
      fill: true,
      backgroundColor: props.colors,
    },
  ],
}));

const options = computed(() => ({
  scales: {
    x: {
      display: false,
    },
    y: {
      display: false,
    },
  },
  layout: {
    autoPadding: false,
  },
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
}));
</script>

<template>
  <div class="doughnut-chart">
    <DoughnutChart
      :chart-data="data"
      :options="options"
      css-classes="doughnut-chart__content"
    />
  </div>
</template>

<style>
.doughnut-chart__content {
  max-height: 90%;
}
</style>
