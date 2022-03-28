<script setup lang="ts">
import { computed } from "vue";
import { LineChart } from "vue-chart-3";
import { Chart, registerables } from "chart.js";

import type { ChartOptions, ChartData } from "chart.js";
import type { IChurnChartData } from "@/utils/charts/getChurnData";
import type { ICacChartData } from "@/utils/charts/getCacData";

interface ISimpleLineChartProps {
  label: string;
  color: string;
  data: IChurnChartData[] | ICacChartData[];
}

const props = defineProps<ISimpleLineChartProps>();

Chart.register(...registerables);

const data = computed<ChartData<"line">>(() => ({
  labels: props.data.map((item) => item.month),

  datasets: [
    {
      label: props.label,
      data: props.data.map((item) => item.amount),
      fill: false,
      borderColor: props.color,
      tension: 0.1,
    },
  ],
}));

const options = computed<ChartOptions<"line">>(() => ({
  scales: {
    x: {
      display: false,
    },
    y: {
      display: false,
    },
  },
  layout: {
    autoPadding: true,
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
  <div class="simple-line-chart">
    <LineChart
      :chart-data="data"
      :options="options"
      css-classes="simple-line-chart__content"
    />
  </div>
</template>

<style scoped>
@import "./styles.css";
</style>
