<script setup lang="ts">
import { ref } from "vue";
import Datepicker from "vue3-date-time-picker";

import CacCard from "./Cac.vue";
import ChurnCard from "./Churn.vue";

const fromdate = ref();
const untiDate = ref();
</script>

<template>
  <div class="between-periods-card">
    <h3 class="between-periods-card__title">Métricas entre periodos</h3>

    <div class="between-periods-card__divider">
      <span>Período</span>

      <p class="between-periods-card__datapicker-wrapper">
        entre
        <Datepicker
          class="between-periods-card__datapicker"
          v-model="fromdate"
          range
          auto-range="5"
        />
        e
        <Datepicker
          class="between-periods-card__datapicker"
          v-model="untiDate"
          range
          auto-range="5"
        />
      </p>
    </div>

    <div class="between-periods-card__content">
      <CacCard />
      <ChurnCard />
    </div>
  </div>
</template>

<style>
.between-periods-card {
  background-color: var(--color-background);
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  border-radius: 10px;
  padding: 30px 40px;
  display: flex;
  flex-direction: column;
}

.between-periods-card__title {
  font-size: 2.6rem;
}

.between-periods-card__divider {
  font-size: 1.4rem;
  display: flex;
  border-bottom: 1px solid rgba(44, 44, 44, 0.2);
  margin-top: 30px;
  padding-bottom: 10px;
  justify-content: space-between;
}

.between-periods-card__datapicker-wrapper {
  display: flex;
  align-items: center;
}

.between-periods-card__datapicker {
  margin-left: 10px;
  margin-right: 10px;
}

.between-periods-card__content {
  margin-top: 30px;
  flex: 1;
  display: flex;
  justify-content: space-between;
}
</style>
