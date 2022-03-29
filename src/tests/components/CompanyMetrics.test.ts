/**
 * @jest-environment jsdom
 */

import { describe, expect, it } from "vitest";
import { shallowMount } from "@vue/test-utils";

import CompanyMetrics from "@/components/CompanyMetrics/index.vue";

describe("CompanyMetrics.vue", () => {
  const component = shallowMount(CompanyMetrics);

  it("renders title", () => {
    expect(component.find("h2.company-metrics__title").exists()).toBeTruthy();
  });

  it("renders correct title", () => {
    expect(component.find("h2.company-metrics__title").text()).toBe(
      "Métricas da Empresa"
    );
  });
});
