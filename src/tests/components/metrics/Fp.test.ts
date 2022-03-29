/**
 * @jest-environment jsdom
 */

import { describe, expect, it } from "vitest";
import { shallowMount } from "@vue/test-utils";

import Fp from "@/components/CompanyMetrics/metrics/Fp/index.vue";

describe("Fp.vue", () => {
  const component = shallowMount(Fp);

  it("renders value", () => {
    expect(component.find("span.legend__text").exists()).toBeTruthy();
  });

  it("renders title", () => {
    expect(component.find("h3.fp-card__title").exists()).toBeTruthy();
  });

  it("renders correct title", () => {
    expect(component.find("h3.fp-card__title").text()).toBe("FP");
  });
});
