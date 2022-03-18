<script setup lang="ts">
import { computed, ref, watch } from "vue";

import { useStore } from "@/store";
import { getCac } from "@/utils/metrics/getCac";

import SimpleLineChart from "../charts/SimpleLineChart.vue";
import { sortContracts } from "@/utils/sortContracts";
import { getCacChartData } from "@/utils/charts/getCacData";
import type { ICacChartData } from "@/utils/charts/getCacData";

interface ICacProps {
  initialDate: Date;
  finalDate: Date;
}

const props = defineProps<ICacProps>();
const store = useStore();

const cacValue = ref(0);
const cacChartData = ref<ICacChartData[]>([]);
const investmentAmount = ref(0);
const initialDate = computed(() => props.initialDate);
const finalDate = computed(() => props.finalDate);
const contracts = computed(() => store.state.contracts);

watch([contracts, initialDate, finalDate, investmentAmount], () => {
  cacValue.value = getCac({
    contracts: contracts.value,
    investmentAmount: investmentAmount.value,
    initialDate: initialDate.value,
    finalDate: finalDate.value,
  });

  const sortedContracts = sortContracts({
    contracts: contracts.value,
    sortBy: "createdAt",
  });

  cacChartData.value = getCacChartData({
    contracts: sortedContracts,
    initialDate: initialDate.value,
    finalDate: finalDate.value,
  });
});

function handleInvestmentAmount(event: any) {
  investmentAmount.value = event.target.value;
}
</script>

<template>
  <div class="cac-card">
    <div class="cac-card__header">
      <div class="cac-card__data">
        <h4 class="cac-card__title">CAC</h4>
        <span class="cac-card__value">{{
          cacValue.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
        }}</span>
      </div>
      <div class="cac-card__input-wrapper">
        <label for="invested-amount">R$</label>
        <input
          id="invested-amount"
          class="cac-card__input"
          type="number"
          placeholder="Valor investido"
          v-on:blur="handleInvestmentAmount"
        />
      </div>
    </div>

    <div class="cac-card__chart">
      <SimpleLineChart label="Novos contratos" color="#2DCD7A" :data="cacChartData" />
    </div>
  </div>
</template>

<style>
.cac-card {
  flex: 1;
  padding-right: 30px;
}

.cac-card__header {
  display: flex;
  justify-content: space-between;
}

.cac-card__title {
  font-size: 1.1rem;
}

.cac-card__value {
  font-size: 2.4rem;
}

.cac-card__input {
  border: none;
  height: 30px;
  padding: 10px;
  max-width: 120px;
  background-color: transparent;
  color: var(--color-text);
}

.cac-card__input::placeholder {
  color: var(--color-text);
}

.cac-card__input:focus {
  outline: none;
}
</style>
