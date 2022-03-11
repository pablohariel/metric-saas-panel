<script setup lang="ts">
import TotalContracts from "./metrics/TotalContracts.vue";
import SimpleMetric from "./metrics/SimpleMetric.vue";
import BetweenPeriods from "./metrics/BetweenPeriods.vue";
import Fp from "./metrics/Fp.vue";

import MrrIcon from "../assets/icons/mrr.svg";
import ArrIcon from "../assets/icons/arr.svg";
import MvIcon from "../assets/icons/mv.svg";
import LtvIcon from "../assets/icons/ltv.svg";
</script>

<template>
  <div class="company-metrics">
    <h2 class="company-metrics__title">Métricas da Empresa</h2>

    <div class="company-metrics__content">
      <TotalContracts class="company-metrics__contracts-card" />

      <SimpleMetric :iconPath="MrrIcon" title="MRR" value="R$ 60.000" />
      <SimpleMetric :iconPath="ArrIcon" title="ARR" value="R$ 800.000" />
      <SimpleMetric :iconPath="MvIcon" title="MV" value="2 anos" />
      <SimpleMetric :iconPath="LtvIcon" title="LTV" value="R$ 5.000" />

      <BetweenPeriods class="company-metrics__cac-card" />
      <Fp class="company-metrics__fp-card" />
    </div>
  </div>
</template>

<style>
.company-metrics {
  display: flex;
  flex-direction: column;
  min-width: 80vw;
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
  margin-bottom: 60px;
}

.company-metrics__contracts-card {
  grid-row-start: 1;
  grid-row-end: 3;
}

.company-metrics__cac-card {
  grid-row-start: 3;
  grid-row-end: 3;
  grid-column-start: 1;
  grid-column-end: 3;
}
</style>
