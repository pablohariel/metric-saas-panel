/**
 * @jest-environment jsdom
 */

import { describe, expect, it } from "vitest";
import { shallowMount } from "@vue/test-utils";

import CustomerStatistics from "@/components/CustomerStatistics/index.vue";

describe("CustomerStatistics.vue", () => {
  const component = shallowMount(CustomerStatistics);

  it("renders title", () => {
    expect(
      component.find("h2.customer-statistics__title").exists()
    ).toBeTruthy();
  });

  it("renders correct title", () => {
    expect(component.find("h2.customer-statistics__title").text()).toBe(
      "Estatísticas de clientes"
    );
  });
});
