<template>
  <div id="page" :class="currentTheme"></div>
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
}

#page.theme-dark {
  --color-background: var(--vt-c-black);
  --color-background-soft: var(--vt-c-black-soft);
  --color-background-mute: var(--vt-c-black-mute);

  --color-heading: var(--vt-c-text-dark);
  --color-text: var(--vt-c-text-dark);
}
</style>
