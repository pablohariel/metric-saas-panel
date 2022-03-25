<script setup lang="ts">
import { computed, ref, watch } from "vue";

import { useStore } from "@/store";
import { getMrr } from "@/utils/metrics/getMrr";
import { getArr } from "@/utils/metrics/getArr";
import { groupContracts } from "@/utils/groupContracts";
import { getActiveContracts } from "@/utils/metrics/getActiveContracts";
import { getMv } from "@/utils/metrics/getMv";
import { getLtv } from "@/utils/metrics/getLtv";

import TotalContracts from "./metrics/TotalContracts/index.vue";
import SimpleMetric from "./metrics/SimpleMetric/index.vue";
import BetweenPeriods from "./metrics/BetweenPeriods/index.vue";
import Fp from "./metrics/Fp/index.vue";

import MrrIcon from "@/assets/icons/mrr.svg";
import ArrIcon from "@/assets/icons/arr.svg";
import MvIcon from "@/assets/icons/mv.svg";
import LtvIcon from "@/assets/icons/ltv.svg";

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
  mrrValue.value = getMrr({
    contracts: activeContracts,
    allowDeletedContracts: false,
  });
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
        :value="
          mrrValue.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })
        "
      />
      <SimpleMetric
        :iconPath="ArrIcon"
        title="ARR"
        :value="
          arrValue.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })
        "
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
        :value="
          ltvValue.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })
        "
      />

      <BetweenPeriods class="company-metrics__between-periods-card" />
      <Fp class="company-metrics__fp-card" />
    </div>
  </div>
</template>

<style scoped>
@import "./styles.css";
</style>
