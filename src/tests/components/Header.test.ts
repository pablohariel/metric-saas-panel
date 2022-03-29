/**
 * @jest-environment jsdom
 */

import { describe, expect, it } from "vitest";
import { shallowMount } from "@vue/test-utils";

import Header from "@/components/Header/index.vue";

describe("Header.vue", () => {
  const title = "Métricas SaaS";

  const component = shallowMount(Header, {
    props: {
      title: title,
    },
  });

  it("renders title", () => {
    expect(component.find("h1").text()).toBe(title);
  });

  it("renders logo", () => {
    expect(component.find(".header__logo img").exists()).toBeTruthy();
  });

  it("renders theme icon", () => {
    expect(component.find(".header__theme-icon img").exists()).toBeTruthy();
  });

  it("renders correct theme logo", () => {
    expect(component.find("img.header__logo-img--light").exists()).toBeTruthy();
  });

  it("renders correct theme icon", () => {
    expect(
      component.find("img.header__theme-icon-img--light").exists()
    ).toBeTruthy();
  });

  it("switches theme on button click", async () => {
    const themeButton = component.find("button.header__btn");

    await themeButton.trigger("click");

    expect(component.find("img.header__logo-img--dark").exists()).toBeTruthy();

    await themeButton.trigger("click");

    expect(component.find("img.header__logo-img--dark").exists()).toBeFalsy();
    expect(component.find("img.header__logo-img--light").exists()).toBeTruthy();
  });
});
