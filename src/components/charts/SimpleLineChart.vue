<script setup lang="ts">
import { computed } from "vue";
import { LineChart } from "vue-chart-3";
import { Chart, registerables } from "chart.js";

interface ISimpleLineChartProps {
  color: string;
}

const props = defineProps<ISimpleLineChartProps>();
Chart.register(...registerables);

const data = computed(() => ({
  labels: [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ],

  datasets: [
    {
      label: "Contratos",
      data: [25, 19, 30, 31, 26, 35, 40, 50, 60, 60, 83, 92],
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
}

.simple-line-chart__content {
  max-height: 80%;
}
</style>
