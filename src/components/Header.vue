<script setup lang="ts">
import MoonIcon from "../assets/icons/theme/moon.svg";
import SunIcon from "../assets/icons/theme/sun.svg";

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
        v-if="currentTheme === 'theme-dark'"
        src="../assets/logo-dark.png"
        alt="Agil logo"
      />
      <img
        v-if="currentTheme === 'theme-light'"
        src="../assets/logo-light.png"
        alt="Agil logo"
      />
    </div>
    <div class="header__theme-icon">
      <button
        class="header__btn"
        v-if="currentTheme === 'theme-dark'"
        @click="switchTheme"
      >
        <img :src="MoonIcon" alt="Moon icon" />
      </button>
      <button
        class="header__btn"
        v-if="currentTheme === 'theme-light'"
        @click="switchTheme"
      >
        <img :src="SunIcon" alt="Sun icon" />
      </button>
    </div>
  </header>
</template>

<style scoped>
.header {
  margin-top: 30px;
  display: flex;
  width: 80vw;
  height: 56px;
  justify-content: space-between;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  border-radius: 10px;
  padding: 0 30px;
  background-color: var(--color-background);
  color: var(--color-text);
}

.header div {
  flex: 1;
  display: flex;
  align-items: center;
}

.header__title {
  justify-content: left;
}

.header__title h1 {
  font-weight: 400;
  font-size: 1.6rem;
}

.header__logo {
  justify-content: center;
}

.header__logo img {
  max-height: 34px;
}

.header__theme-icon {
  justify-content: right;
}

.header__btn {
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: 1520px) {
  .header {
    width: 90vw;
  }
}

@media (max-width: 1024px) {
  .header__logo img {
    max-height: 28px;
  }

  .header__theme-icon img {
    max-height: 28px;
  }
}

@media (max-width: 768px) {
  .header {
    padding: 0 20px;
  }

  .header__logo img {
    max-height: 24px;
  }

  .header__theme-icon img {
    max-height: 24px;
  }

  .header__title {
    flex: 2;
  }
}

@media (max-width: 480px) {
  .header__title h1 {
    max-width: 50%;
  }
  .header__logo img {
    max-height: 22px;
  }

  .header__logo {
  }

  .header__theme-icon {
    align-items: center;
  }

  .header__theme-icon img {
    max-height: 22px;
  }
}
</style>
