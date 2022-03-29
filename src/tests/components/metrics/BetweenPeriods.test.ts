/**
 * @jest-environment jsdom
 */

import { describe, expect, it } from "vitest";
import { shallowMount } from "@vue/test-utils";

import BetweenPeriods from "@/components/CompanyMetrics/metrics/BetweenPeriods/index.vue";

describe("BetweenPeriods.vue", () => {
  const component = shallowMount(BetweenPeriods);

  it("renders title", () => {
    expect(
      component.find("h3.between-periods-card__title").exists()
    ).toBeTruthy();
  });

  it("renders correct title", () => {
    expect(component.find("h3.between-periods-card__title").text()).toBe(
      "Métricas entre períodos"
    );
  });
});
