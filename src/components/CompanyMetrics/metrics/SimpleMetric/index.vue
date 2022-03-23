<script setup lang="ts">
interface IMetricCardProps {
  iconPath: string;
  title: string;
  value: string;
}

defineProps<IMetricCardProps>();
</script>

<template>
  <div class="metric-card">
    <img class="metric-card__icon" :src="iconPath" alt="Metric icon" />

    <div class="metric-card__info">
      <span class="metric-card__value">{{ value }}</span>
      <h3 class="metric-card__title">{{ title }}</h3>
    </div>
  </div>
</template>

<style scoped>
@import "./styles.css";
</style>
