<script setup lang="ts">
import { computed } from "vue";
import { DoughnutChart } from "vue-chart-3";
import { Chart, registerables } from "chart.js";

import type { ChartOptions, ChartData } from "chart.js";

interface IDoughnutChartProps {
  labels: string[];
  data: number[];
  colors: string[];
}

const props = defineProps<IDoughnutChartProps>();

Chart.register(...registerables);

const data = computed<ChartData<"doughnut">>(() => ({
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

const options = computed<ChartOptions<"doughnut">>(() => ({
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

<style scoped>
@import "./styles.css";
</style>
