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
.metric-card {
  background-color: var(--color-background);
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  border-radius: 10px;
  padding: 30px 40px;
  display: flex;
}

.metric-card__info {
  display: flex;
  flex-direction: column;
  margin-left: 26px;
}

.metric-card__value {
  font-size: 2.4rem;
  font-weight: 600;
}

.metric-card__title {
  font-size: 1.4rem;
  font-weight: 400;
  margin-top: 10px;
}

.metric-card__icon {
  max-width: 90px;
  max-height: 90px;
}

@media (max-width: 480px) {
  .metric-card {
    padding: 20px 30px;
  }
}
</style>
