<script setup lang="ts">
import { ref } from "vue";
import Datepicker from "vue3-datepicker";
import { add } from "date-fns";

import CacCard from "./Cac.vue";
import ChurnCard from "./Churn.vue";

const initialDate = ref(add(new Date(), { years: -1 }));
const finalDate = ref(new Date());
</script>

<template>
  <div class="between-periods-card">
    <h3 class="between-periods-card__title">Métricas entre periodos</h3>

    <div class="between-periods-card__divider">
      <span class="between-periods-card__subtitle">Período</span>

      <p class="between-periods-card__datapicker-wrapper">
        entre
        <datepicker class="between-periods-card__datapicker" v-model="initialDate" />
        e
        <datepicker class="between-periods-card__datapicker" v-model="finalDate" />
      </p>
    </div>

    <div class="between-periods-card__content">
      <CacCard :initialDate="initialDate" :finalDate="finalDate" />
      <ChurnCard
        class="between-periods__churn-card"
        :initialDate="initialDate"
        :finalDate="finalDate"
      />
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
  --vdp-selected-bg-color: #2c2c2c;
  --vdp-hover-bg-color: #2c2c2c;
  --vdp-text-color: var(--color-text);
  --vdp-bg-color: var(--color-background-soft);
  --vdp-heading-hover-color: var(--color-background);
  --vdp-disabled-color: var(--color-background);
}

.between-periods-card__datapicker {
  margin-left: 10px;
  margin-right: 6px;
  max-width: 80px;
  border: none;
  padding: 0;
  cursor: pointer;
  background-color: transparent;
  font-size: 1.4rem;
  color: var(--color-text);
}

.between-periods-card__datapicker:focus {
  outline: none;
}

.between-periods-card__content {
  margin-top: 30px;
  flex: 1;
  display: flex;
  justify-content: space-between;
}

.between-periods__churn-card {
  padding-left: 30px;
}

@media (max-width: 768px) {
  .between-periods-card {
    padding: 20px 30px;
  }

  .between-periods-card__divider {
    padding-bottom: 4px;
  }

  .between-periods-card__datapicker {
    margin-left: 2px;
    margin-right: 2px;
    max-width: 80px;
    display: flex;
    text-align: center;
  }

  .between-periods-card__content {
    flex-direction: column;
    min-height: 500px;
  }

  .between-periods__churn-card {
    padding-left: 0px;
    margin-top: 40px;
  }
}
</style>
