import type { InjectionKey } from "vue";
import { createStore, Store, useStore as baseUseStore } from "vuex";

interface IThemeState {
  currentTheme: string;
}

const themeKey: InjectionKey<Store<IThemeState>> = Symbol();

const themeStore = createStore<IThemeState>({
  state: {
    currentTheme: localStorage.getItem("theme-color") || "theme-light",
  },

  mutations: {
    setCurrentTheme(state, theme) {
      state.currentTheme = theme;
    },
  },

  actions: {
    switchTheme({ state, commit }) {
      if (state.currentTheme === "theme-dark") {
        localStorage.setItem("theme-color", "theme-light");
        commit("setCurrentTheme", "theme-light");
      } else {
        localStorage.setItem("theme-color", "theme-dark");
        commit("setCurrentTheme", "theme-dark");
      }
    },
  },
});

function useThemeStore() {
  return baseUseStore(themeKey);
}

export { IThemeState, themeKey, themeStore, useThemeStore };
