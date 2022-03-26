<script setup lang="ts">
import { ref, computed } from "vue";

import { useDataStore } from "./stores/dataStore";
import { useThemeStore } from "./stores/themeStore";
import Header from "./components/Header/index.vue";
import CompanyMetrics from "./components/CompanyMetrics/index.vue";
import CustomerStatistics from "./components/CustomerStatistics/index.vue";

const dataStore = useDataStore();
dataStore.dispatch("getContracts");
dataStore.dispatch("getPayments");
dataStore.dispatch("getCustomers");

const title = ref("Métricas SaaS");

const themeStore = useThemeStore();
const currentTheme = computed(() => themeStore.state.currentTheme);
</script>

<template>
  <div id="page" :class="currentTheme">
    <Header :title="title" />

    <main>
      <CompanyMetrics />
      <CustomerStatistics />
    </main>
  </div>
</template>

<style>
@import "./assets/base.css";
#page {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  color: var(--color-text);
  background: var(--color-background-soft);
  transition: color 0.5s;
  line-height: 1.6;
  font-size: 1.5rem;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#page.theme-light {
  --color-background: var(--vt-c-white);
  --color-background-soft: var(--vt-c-white-soft);
  --color-background-mute: var(--vt-c-white-mute);

  --color-heading: var(--vt-c-text-light);
  --color-text: var(--vt-c-text-light);

  --color-text-table-header: #fff;
  --color-background-table-header: #1c1917;
  --color-background-table-row-primary: #fff;
  --color-background-table-row-alternate: #f9fafc;
  --color-box-shadow-table: #e6e7e9;
}

#page.theme-dark {
  --color-background: var(--vt-c-black);
  --color-background-soft: var(--vt-c-black-soft);
  --color-background-mute: var(--vt-c-black-mute);

  --color-heading: var(--vt-c-text-dark);
  --color-text: var(--vt-c-text-dark);

  --color-text-table-header: #fff;
  --color-background-table-header: var(--vt-c-black);
  --color-background-table-row-primary: var(--vt-c-black-mute);
  --color-background-table-row-alternate: #2c2c2c;
  --color-box-shadow-table: #2c2c2c;
}
</style>
