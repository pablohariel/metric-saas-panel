<script setup lang="ts">
import { ref } from "vue";
import Datepicker from "vue3-datepicker";
import { add } from "date-fns";

import CacCard from "../Cac/index.vue";
import ChurnCard from "../Churn/index.vue";

const initialDate = ref(add(new Date(), { years: -1 }));
const finalDate = ref(new Date());
</script>

<template>
  <div class="between-periods-card">
    <h3 class="between-periods-card__title">Métricas entre períodos</h3>

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
@import "./styles.css";
</style>
