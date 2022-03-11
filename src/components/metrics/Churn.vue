<script setup lang="ts">
import SimpleLineChart from "../charts/SimpleLineChart.vue";
</script>

<template>
  <div class="churn-card">
    <div class="churn-card__header">
      <div class="churn-card__data">
        <h4 class="churn-card__title">CHURN</h4>
        <span class="churn-card__value">2%</span>
      </div>
    </div>

    <div class="churn-card__chart">
      <SimpleLineChart color="#EA5455" />
    </div>
  </div>
</template>

<style>
.churn-card {
  flex: 1;
  padding-left: 30px;
}

.churn-card__title {
  font-size: 1.1rem;
}

.churn-card__value {
  font-size: 2.4rem;
}
</style>
