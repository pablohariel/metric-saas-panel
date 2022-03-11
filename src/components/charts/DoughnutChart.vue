<script setup lang="ts">
import { computed } from "vue";
import { DoughnutChart } from "vue-chart-3";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const data = computed(() => ({
  labels: ["Cartão", "Boleto", "Pix"],

  datasets: [
    {
      label: "Porcentagem",
      data: [40, 30, 30],
      fill: true,
      backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)", "rgb(255, 205, 86)"],
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
  max-height: 70%;
  max-width: 70%;
}
</style>
