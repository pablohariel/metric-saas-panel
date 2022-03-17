<script setup lang="ts">
import { computed, ref, watch } from "vue";

import type { IFp } from "@/utils/metrics/getFp";
import { useStore } from "@/store";
import { getFp } from "@/utils/metrics/getFp";

import DoughnutChart from "../charts/DoughnutChart.vue";

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

    <div>
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

<style>
.fp-card {
  background-color: var(--color-background);
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  border-radius: 10px;
  padding: 30px 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.fp-card__title {
  font-size: 1.8rem;
}

.fp-card__legend {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
}

.fp-card__legend li {
  margin: 0;
  list-style: none;
  display: flex;
  align-items: center;
}

.legend__bullet {
  height: 1.4rem;
  width: 1.4rem;
  border: 2px solid;
  border-radius: 50%;
  margin-right: 8px;
}

.legend__bullet.credit-card {
  border-color: #7f68fa;
}

.legend__bullet.billet {
  border-color: #ffa550;
}

.legend__bullet.pix {
  border-color: #ea6061;
}

.legend__text {
  font-size: 1.4rem;
  font-weight: 300;
}
</style>
