<script setup lang="ts">
import { ref, computed, watch } from "vue";

import { useStore } from "@/store";
import { joinDates } from "@/utils/joinDates";
import { getActiveContracts } from "@/utils/metrics/getActiveContracts";
import type { IJoinedDate } from "@/utils/joinDates";

import ContractIcon from "@/assets/icons/contract.svg";

import LineChart from "../../charts/LineChart/index.vue";

const dates = ref<IJoinedDate[]>([]);

const store = useStore();
const contracts = computed(() => store.state.contracts);
const activeContractsAmount = ref(0);

watch(contracts, () => {
  const activeContracts = getActiveContracts({ contracts: contracts.value });
  activeContractsAmount.value = activeContracts.length;

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
    <h3 class="contracts-card__value">{{ activeContractsAmount }}</h3>
    <p class="contracts-card__title">Total de contratos</p>

    <LineChart v-if="dates.length > 0" :dates="dates" />
  </div>
</template>

<style scoped>
@import "./styles.css";
</style>
