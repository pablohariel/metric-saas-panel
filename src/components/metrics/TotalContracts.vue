<script setup lang="ts">
import { ref, computed, watch } from "vue";

import type { IJoinedDate } from "../../utils/joinDates";

import LineChart from "../charts/LineChart.vue";
import ContractIcon from "../../assets/icons/contract.svg";
import { joinDates } from "../../utils/joinDates";
import { useStore } from "@/store";

const dates = ref<IJoinedDate[]>([]);

const store = useStore();
const contracts = computed(() => store.state.contracts);

watch(contracts, () => {
  if (contracts.value.length > 0) {
    let datesToParse = [] as Date[];

    for (const contract of contracts.value) {
      datesToParse.push(new Date(contract.createdAt));
    }

    datesToParse = datesToParse.sort((a: any, b: any) => b - a);

    const datesParsed = joinDates({ dates: datesToParse });
    dates.value = datesParsed.slice(0, 12).reverse();
  }
});
</script>

<template>
  <div class="contracts-card">
    <img class="contracts-card__icon" :src="ContractIcon" alt="Contract icon" />
    <h3 class="contracts-card__value">{{ contracts.length }}</h3>
    <p class="contracts-card__title">Total de contratos</p>

    <LineChart v-if="dates.length > 0" :dates="dates" />
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
