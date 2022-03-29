/**
 * @jest-environment jsdom
 */
import { describe, expect, it } from "vitest";
import { shallowMount } from "@vue/test-utils";

import TotalContracts from "@/components/CompanyMetrics/metrics/TotalContracts/index.vue";

describe("TotalContracts.vue", () => {
  const component = shallowMount(TotalContracts);

  it("renders icon", () => {
    expect(component.find(".contracts-card__icon").exists()).toBeTruthy();
  });

  it("renders correct icon", () => {
    expect(component.find(".contracts-card__icon").attributes("src")).toBe(
      "/src/assets/icons/contract.svg"
    );
  });

  it("renders value", () => {
    expect(component.find(".contracts-card__value").exists()).toBeTruthy();
  });

  it("renders title", () => {
    expect(component.find(".contracts-card__title").exists()).toBeTruthy();
  });

  it("renders correct title", () => {
    expect(component.find(".contracts-card__title").text()).toBe(
      "Total de contratos"
    );
  });
});
