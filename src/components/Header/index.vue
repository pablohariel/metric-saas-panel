<script setup lang="ts">
import MoonIcon from "@/assets/icons/theme/moon.svg";
import SunIcon from "@/assets/icons/theme/sun.svg";
import LogoLight from "@/assets/logo-light.png";
import LogoDark from "@/assets/logo-dark.png";

interface IHeaderProps {
  title: string;
  currentTheme: string;
}

defineProps<IHeaderProps>();

const emit = defineEmits(["switchTheme"]);

function switchTheme() {
  emit("switchTheme");
}
</script>

<template>
  <header class="header">
    <div class="header__title">
      <h1>{{ title }}</h1>
    </div>
    <div class="header__logo">
      <img
        :src="currentTheme === 'theme-light' ? LogoLight : LogoDark"
        alt="Agil logo"
      />
    </div>
    <div class="header__theme-icon">
      <button class="header__btn" @click="switchTheme">
        <img
          :src="currentTheme === 'theme-light' ? SunIcon : MoonIcon"
          alt="Sun icon"
        />
      </button>
    </div>
  </header>
</template>

<style scoped>
@import "./styles.css";
</style>
