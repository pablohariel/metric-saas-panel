<script setup lang="ts">
import { computed, ref, watch } from "vue";

import { useStore } from "@/store";
import { getChurn } from "@/utils/metrics/getChurn";

import SimpleLineChart from "../charts/SimpleLineChart.vue";

import { getChurnChartData } from "@/utils/charts/getChurnData";
import type { IChurnChartData } from "@/utils/charts/getChurnData";
import { sortContracts } from "@/utils/sortContracts";

interface IChurnProps {
  initialDate: Date;
  finalDate: Date;
}

const props = defineProps<IChurnProps>();
const store = useStore();

const churnValue = ref(0);
const churnChartData = ref<IChurnChartData[]>([]);
const initialDate = computed(() => props.initialDate);
const finalDate = computed(() => props.finalDate);
const contracts = computed(() => store.state.contracts);

watch([contracts, initialDate, finalDate], () => {
  churnValue.value = getChurn({
    contracts: contracts.value,
    initialDate: initialDate.value,
    finalDate: finalDate.value,
  });

  const deletedContracts = contracts.value.filter((contract) => contract.deletedAt);

  const sortedDeletedContracts = sortContracts({
    contracts: deletedContracts,
    sortBy: "deletedAt",
  });

  churnChartData.value = getChurnChartData({
    deletedContracts: sortedDeletedContracts,
    initialDate: initialDate.value,
    finalDate: finalDate.value,
  });
});
</script>

<template>
  <div class="churn-card">
    <div class="churn-card__header">
      <div class="churn-card__data">
        <h4 class="churn-card__title">CHURN</h4>
        <span class="churn-card__value">{{ churnValue.toFixed(2) }}%</span>
      </div>
    </div>

    <div class="churn-card__chart">
      <SimpleLineChart
        label="Contratos cancelados"
        color="#EA5455"
        :data="churnChartData"
      />
    </div>
  </div>
</template>

<style>
.churn-card {
  flex: 1;
  padding-left: 30px;
}

.churn-card__title {
  font-size: 1.1rem;
}

.churn-card__value {
  font-size: 2.4rem;
}
</style>
