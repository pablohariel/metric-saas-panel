<script setup lang="ts">
import { computed, ref, watch } from "vue";

import type { IFp } from "@/utils/metrics/getFp";
import { useStore } from "@/store";
import { getFp } from "@/utils/metrics/getFp";

import DoughnutChart from "../../charts/DoughnutChart/index.vue";

const store = useStore();

const payments = computed(() => store.state.payments);
const fpValue = ref<IFp>({
  card: {
    amountUsed: 0,
    average: "0%",
  },
  billet: {
    amountUsed: 0,
    average: "0%",
  },
  pix: {
    amountUsed: 0,
    average: "0%",
  },
});

watch(payments, () => {
  fpValue.value = getFp({ payments: payments.value });
});
</script>

<template>
  <div class="fp-card">
    <h3 class="fp-card__title">FP</h3>

    <div class="fp-card__chart">
      <DoughnutChart
        :labels="['Cartão', 'Boleto', 'Pix']"
        :data="[
          fpValue.card.amountUsed,
          fpValue.billet.amountUsed,
          fpValue.pix.amountUsed,
        ]"
        :colors="['#7f68fa', '#ffa550', '#ea6061']"
      />
    </div>

    <ul class="fp-card__legend">
      <li>
        <div class="legend__bullet credit-card"></div>
        <span class="legend__text">Cartão - {{ fpValue.card.average }}</span>
      </li>
      <li>
        <div class="legend__bullet billet"></div>
        <span class="legend__text">Boleto - {{ fpValue.billet.average }}</span>
      </li>
      <li>
        <div class="legend__bullet pix"></div>
        <span class="legend__text">Pix - {{ fpValue.pix.average }}</span>
      </li>
    </ul>
  </div>
</template>

<style scoped>
@import "./styles.css";
</style>
