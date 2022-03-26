<script setup lang="ts">
import { computed } from "vue";
import { LineChart } from "vue-chart-3";
import { Chart, registerables } from "chart.js";

import type { IJoinedDate } from "@/utils/joinDates";

interface ILineChartProps {
  dates: IJoinedDate[];
}

const props = defineProps<ILineChartProps>();

Chart.register(...registerables);

const data = computed(() => ({
  labels: props.dates.length > 0 ? props.dates.map((date) => date.month) : [],

  datasets: [
    {
      label: "Novos contratos",
      data:
        props.dates.length > 0 ? props.dates.map((date) => date.amount) : [],
      fill: true,
      backgroundColor: "rgba(183, 177, 247, 1)",
      borderColor: "#7E72F2",
      tension: 0.1,
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
  <div class="line-chart">
    <LineChart
      :chart-data="data"
      :options="options"
      css-classes="line-chart__content"
    />
  </div>
</template>

<style>
@import "./styles.css";
</style>
