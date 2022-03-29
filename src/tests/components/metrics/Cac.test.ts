/**
 * @jest-environment jsdom
 */

import { describe, expect, it } from "vitest";
import { shallowMount } from "@vue/test-utils";

import Cac from "@/components/CompanyMetrics/metrics/Cac/index.vue";

describe("Cac.vue", () => {
  const initialDate = new Date();
  const finalDate = new Date();

  const component = shallowMount(Cac, {
    props: {
      initialDate,
      finalDate,
    },
  });

  it("renders value", () => {
    expect(component.find("span.cac-card__value").exists()).toBeTruthy();
  });

  it("renders title", () => {
    expect(component.find("h4.cac-card__title").exists()).toBeTruthy();
  });

  it("renders correct title", () => {
    expect(component.find("h4.cac-card__title").text()).toBe("CAC");
  });

  it("renders input", () => {
    expect(component.find("input.cac-card__input").exists()).toBeTruthy();
  });
});
