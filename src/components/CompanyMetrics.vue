<script setup lang="ts">
import { computed, ref, watch } from "vue";

import { useStore } from "@/store";
import { getMrr } from "@/utils/metrics/getMrr";
import { getArr } from "@/utils/metrics/getArr";
import { groupContracts } from "@/utils/groupContracts";
import { getActiveContracts } from "@/utils/metrics/getActiveContracts";
import { getMv } from "@/utils/metrics/getMv";
import { getLtv } from "@/utils/metrics/getLtv";

import TotalContracts from "./metrics/TotalContracts.vue";
import SimpleMetric from "./metrics/SimpleMetric.vue";
import BetweenPeriods from "./metrics/BetweenPeriods.vue";
import Fp from "./metrics/Fp.vue";

import MrrIcon from "../assets/icons/mrr.svg";
import ArrIcon from "../assets/icons/arr.svg";
import MvIcon from "../assets/icons/mv.svg";
import LtvIcon from "../assets/icons/ltv.svg";

const mrrValue = ref(0);
const arrValue = ref(0);
const mvValue = ref("");
const ltvValue = ref(0);

const store = useStore();

const contracts = computed(() => store.state.contracts);

watch(contracts, () => {
  const activeContracts = getActiveContracts({ contracts: contracts.value });
  const groupedContracts = groupContracts({ contracts: contracts.value });
  const deletedContracts = contracts.value.filter((c) => c.deletedAt);

  mvValue.value = getMv({ deletedContracts });
  mrrValue.value = getMrr({ contracts: activeContracts });
  arrValue.value = getArr({ groupedContracts });
  ltvValue.value = getLtv({ deletedContracts });
});
</script>

<template>
  <div class="company-metrics">
    <h2 class="company-metrics__title">Métricas da Empresa</h2>

    <div class="company-metrics__content">
      <TotalContracts class="company-metrics__contracts-card" />

      <SimpleMetric
        :iconPath="MrrIcon"
        title="MRR"
        :value="mrrValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })"
      />
      <SimpleMetric
        :iconPath="ArrIcon"
        title="ARR"
        :value="arrValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })"
      />
      <SimpleMetric
        class="company-metrics__mv-card"
        :iconPath="MvIcon"
        title="MV"
        :value="mvValue"
      />
      <SimpleMetric
        class="company-metrics__ltv-card"
        :iconPath="LtvIcon"
        title="LTV"
        :value="ltvValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })"
      />

      <BetweenPeriods class="company-metrics__between-periods-card" />
      <Fp class="company-metrics__fp-card" />
    </div>
  </div>
</template>

<style>
.company-metrics {
  display: flex;
  flex-direction: column;
  width: 80vw;
  max-width: 80vw;
  margin-top: 60px;
}

.company-metrics__title {
  font-size: 3.2rem;
}

.company-metrics__content {
  margin-top: 10px;
  display: grid;
  grid-template: 162px 162px 500px / 1.2fr 1fr 1fr;
  gap: 28px;
}

.company-metrics__contracts-card {
  grid-row-start: 1;
  grid-row-end: 3;
}

.company-metrics__between-periods-card {
  grid-row-start: 3;
  grid-row-end: 4;
  grid-column-start: 1;
  grid-column-end: 3;
}

@media (max-width: 1520px) {
  .company-metrics {
    width: 90vw;
    max-width: 90vw;
  }
}

@media (max-width: 1320px) {
  .company-metrics__content {
    grid-template: 162px 162px 162px 500px 500px / 1.2fr 1fr;
    gap: 24px;
  }

  .company-metrics__contracts-card {
    grid-row-start: 1;
    grid-row-end: 3;
    grid-column-start: 1;
    grid-column-end: 1;
  }

  .company-metrics__between-periods-card {
    grid-row-start: 4;
    grid-row-end: 5;
    grid-column-start: 1;
    grid-column-end: 3;
  }

  .company-metrics__fp-card {
    grid-row-start: 5;
    grid-row-end: 6;
    grid-column-start: 1;
    grid-column-end: 3;
  }

  .company-metrics__mv-card {
    grid-row-start: 3;
    grid-row-end: 4;
    grid-column-start: 1;
    grid-column-end: 2;
  }

  .company-metrics__ltv-card {
    grid-row-start: 3;
    grid-row-end: 4;
    grid-column-start: 2;
    grid-column-end: 3;
  }
}

@media (max-width: 1024px) {
  .company-metrics {
    width: 90vw;
    max-width: 90vw;
  }
}

@media (max-width: 768px) {
  .company-metrics {
    display: flex;
    flex-direction: column;
    margin-top: 50px;
  }

  .company-metrics__content {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .company-metrics__contracts-card {
    min-height: 320px;
  }
}

@media (max-width: 580px) {
}
</style>
