<script setup lang="ts">
import { computed } from "vue";
import { LineChart } from "vue-chart-3";
import { Chart, registerables } from "chart.js";
import type { IChurnChartData } from "@/utils/charts/getChurnData";
import type { ICacChartData } from "@/utils/charts/getCacData";

interface ISimpleLineChartProps {
  label: string;
  color: string;
  data: IChurnChartData[] | ICacChartData[];
}

const props = defineProps<ISimpleLineChartProps>();

Chart.register(...registerables);

const data = computed(() => ({
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
  <div class="simple-line-chart">
    <LineChart
      :chart-data="data"
      :options="options"
      css-classes="simple-line-chart__content"
    />
  </div>
</template>

<style>
.simple-line-chart {
  height: 200px;
  display: flex;
  align-items: flex-end;
  margin-top: 20px;
}

.simple-line-chart__content {
  max-height: 100%;
  width: 100%;
}

@media (max-width: 480px) {
  .simple-line-chart {
    height: 180px;
    display: flex;
    align-items: flex-end;
    margin-top: 0px;
  }

  .simple-line-chart__content {
    max-height: 90%;
    width: 100%;
  }
}
</style>
