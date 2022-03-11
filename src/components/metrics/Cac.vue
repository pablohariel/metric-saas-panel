<script setup lang="ts">
import SimpleLineChart from "../charts/SimpleLineChart.vue";
</script>

<template>
  <div class="cac-card">
    <div class="cac-card__header">
      <div class="cac-card__data">
        <h4 class="cac-card__title">CAC</h4>
        <span class="cac-card__value">R$ 15</span>
      </div>
      <div class="cac-card__input-wrapper">
        <label for="invested-amount">R$</label>
        <input
          id="invested-amount"
          class="cac-card__input"
          type="number"
          placeholder="Valor investido"
        />
      </div>
    </div>

    <div class="cac-card__chart">
      <SimpleLineChart color="#2DCD7A" />
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
