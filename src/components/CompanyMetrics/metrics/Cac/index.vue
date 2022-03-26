<script setup lang="ts">
import { computed, ref, watch } from "vue";

import { useDataStore } from "@/stores/dataStore";
import { getCac } from "@/utils/metrics/getCac";
import { sortContracts } from "@/utils/sortContracts";
import { getCacChartData } from "@/utils/charts/getCacData";
import type { ICacChartData } from "@/utils/charts/getCacData";

import SimpleLineChart from "../../charts/SimpleLineChart/index.vue";

interface ICacProps {
  initialDate: Date;
  finalDate: Date;
}

const props = defineProps<ICacProps>();
const store = useDataStore();

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
          cacValue.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })
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
      <SimpleLineChart
        label="Novos contratos"
        color="#2DCD7A"
        :data="cacChartData"
      />
    </div>
  </div>
</template>

<style scoped>
@import "./styles.css";
</style>
