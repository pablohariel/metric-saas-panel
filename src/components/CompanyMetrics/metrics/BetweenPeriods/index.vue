<script setup lang="ts">
import { ref, computed } from "vue";
import Datepicker from "vue3-datepicker";
import { add } from "date-fns";

import { useThemeStore } from "@/stores/themeStore";

import ArrowDownLight from "@/assets/arrow-down-light.svg";
import ArrowDownDark from "@/assets/arrow-down-dark.svg";

import CacCard from "../Cac/index.vue";
import ChurnCard from "../Churn/index.vue";

const themeStore = useThemeStore();
const currentTheme = computed(() => themeStore.state.currentTheme);

const initialDate = ref(add(new Date(), { years: -1 }));
const finalDate = ref(new Date());
const initialDatepicker = ref<InstanceType<typeof Datepicker> | null>(null);
const finalDatepicker = ref<InstanceType<typeof Datepicker> | null>(null);

function openInitialDatepicker() {
  if (initialDatepicker.value) {
    initialDatepicker.value.inputRef?.focus();
  }
}

function openFinalDatepicker() {
  if (finalDatepicker.value) {
    finalDatepicker.value.inputRef?.focus();
  }
}
</script>

<template>
  <div class="between-periods-card">
    <h3 class="between-periods-card__title">Métricas entre períodos</h3>

    <div class="between-periods-card__divider">
      <span class="between-periods-card__subtitle">Período</span>

      <p class="between-periods-card__datapicker-wrapper">
        entre
        <span
          class="between-periods-card__datapicker-group"
          @click="openInitialDatepicker"
        >
          <datepicker
            class="between-periods-card__datapicker"
            v-model="initialDate"
            ref="initialDatepicker"
          />

          <img
            :src="
              currentTheme === 'theme-light' ? ArrowDownLight : ArrowDownDark
            "
            alt="Arrow down icon"
          />
        </span>

        e
        <span
          class="between-periods-card__datapicker-group"
          @click="openFinalDatepicker"
        >
          <Datepicker
            class="between-periods-card__datapicker"
            v-model="finalDate"
            ref="finalDatepicker"
          />
          <img
            :src="
              currentTheme === 'theme-light' ? ArrowDownLight : ArrowDownDark
            "
            alt="Arrow down icon"
          />
        </span>
      </p>
    </div>

    <div class="between-periods-card__content">
      <CacCard :initialDate="initialDate" :finalDate="finalDate" />
      <ChurnCard
        class="between-periods__churn-card"
        :initialDate="initialDate"
        :finalDate="finalDate"
      />
    </div>
  </div>
</template>

<style>
@import "./styles.css";
</style>
