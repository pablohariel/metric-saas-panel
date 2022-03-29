/**
 * @jest-environment jsdom
 */

import { describe, expect, it } from "vitest";
import { shallowMount } from "@vue/test-utils";

import Churn from "@/components/CompanyMetrics/metrics/Churn/index.vue";

describe("Churn.vue", () => {
  const initialDate = new Date();
  const finalDate = new Date();

  const component = shallowMount(Churn, {
    props: {
      initialDate,
      finalDate,
    },
  });

  it("renders value", () => {
    expect(component.find("span.churn-card__value").exists()).toBeTruthy();
  });

  it("renders title", () => {
    expect(component.find("h4.churn-card__title").exists()).toBeTruthy();
  });

  it("renders correct title", () => {
    expect(component.find("h4.churn-card__title").text()).toBe("CHURN");
  });
});
