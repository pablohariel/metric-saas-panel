<script setup lang="ts">
import { computed } from "vue";
import { LineChart } from "vue-chart-3";
import { Chart, registerables } from "chart.js";

import type { IJoinedDate } from "../../utils/joinDates";

interface ILineChartProps {
  dates: IJoinedDate[];
}

const { dates = [] } = defineProps<ILineChartProps>();

Chart.register(...registerables);

const data = computed(() => ({
  labels: dates.length > 0 ? dates.map((date) => date.month) : [],

  datasets: [
    {
      label: "Novos contratos",
      data: dates.length > 0 ? dates.map((date) => date.amount) : [],
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
    <LineChart :chart-data="data" :options="options" css-classes="line-chart__content" />
  </div>
</template>

<style>
.line-chart {
  position: absolute;
  max-height: 130px;
  height: 130px;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 0px 0px 10px 10px;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
}

.line-chart__content {
  max-height: 90%;
  max-width: 100%;
  width: 100%;
}
</style>
