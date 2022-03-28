<script setup lang="ts">
import { computed } from "vue";

import { themeStore } from "@/stores/themeStore";

import MoonIcon from "@/assets/icons/theme/moon.svg";
import SunIcon from "@/assets/icons/theme/sun.svg";
import LogoLight from "@/assets/logo-light.png";
import LogoDark from "@/assets/logo-dark.png";

interface IHeaderProps {
  title: string;
}
defineProps<IHeaderProps>();

const currentTheme = computed(() => themeStore.state.currentTheme);

function switchTheme() {
  themeStore.dispatch("switchTheme");
}
</script>

<template>
  <header class="header">
    <div class="header__title">
      <h1>{{ title }}</h1>
    </div>
    <div class="header__logo">
      <img
        :class="
          currentTheme === 'theme-light'
            ? 'header__logo-img--light'
            : 'header__logo-img--dark'
        "
        :src="currentTheme === 'theme-light' ? LogoLight : LogoDark"
        :alt="
          currentTheme === 'theme-light' ? 'Agil logo light' : 'Agil logo dark'
        "
      />
    </div>
    <div class="header__theme-icon">
      <button class="header__btn" @click="switchTheme">
        <img
          :class="
            currentTheme === 'theme-light'
              ? 'header__theme-icon-img--light'
              : 'header__theme-icon-img--dark'
          "
          :src="currentTheme === 'theme-light' ? SunIcon : MoonIcon"
          :alt="
            currentTheme === 'theme-light' ? 'Sun icon light' : 'Sun icon dark'
          "
        />
      </button>
    </div>
  </header>
</template>

<style scoped>
@import "./styles.css";
</style>
