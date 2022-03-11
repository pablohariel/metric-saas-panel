<script setup lang="ts">
import LineChart from "../charts/LineChart.vue";

import ContractIcon from "../../assets/icons/contract.svg";
</script>

<template>
  <div class="contracts-card">
    <img class="contracts-card__icon" :src="ContractIcon" alt="Contract icon" />
    <h3 class="contracts-card__value">300</h3>
    <p class="contracts-card__title">Total de contratos</p>

    <LineChart />
  </div>
</template>

<style>
.contracts-card {
  position: relative;
  background-color: var(--color-background);
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  border-radius: 10px;
  padding: 34px 40px 0px 40px;
}

.contracts-card__value {
  font-size: 2.4rem;
  font-weight: bold;
  margin-top: 20px;
}

.contracts-card__title {
  margin-top: 10px;
  font-size: 1.4rem;
}

.contracts-card__icon {
  max-width: 90px;
  max-height: 90px;
}
</style>
