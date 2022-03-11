<script setup lang="ts">
import DoughnutChart from "../charts/DoughnutChart.vue";
</script>

<template>
  <div class="fp-card">
    <h3 class="fp-card__title">FP</h3>

    <div>
      <DoughnutChart />
    </div>

    <ul class="fp-card__legend">
      <li>
        <div class="legend__bullet credit-card"></div>
        <span class="legend__text">Cartão - 40%</span>
      </li>
      <li>
        <div class="legend__bullet billet"></div>
        <span class="legend__text">Boleto - 30%</span>
      </li>
      <li>
        <div class="legend__bullet pix"></div>
        <span class="legend__text">Pix - 30%</span>
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
