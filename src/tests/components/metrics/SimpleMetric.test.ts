/**
 * @jest-environment jsdom
 */

import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";

import SimpleMetric from "@/components/CompanyMetrics/metrics/SimpleMetric/index.vue";

describe("SimpleMetric.vue", () => {
  const iconPath = "/src/assets/icons/mv.svg";
  const title = "MV";
  const value = "132 dias";

  const component = mount(SimpleMetric, {
    props: {
      iconPath,
      title,
      value,
    },
  });

  it("renders icon", () => {
    expect(component.find("img.metric-card__icon").exists()).toBeTruthy();
  });

  it("renders correct icon", () => {
    expect(component.find("img.metric-card__icon").attributes("src")).toBe(
      iconPath
    );
  });

  it("renders value", () => {
    expect(component.find("span.metric-card__value").exists()).toBeTruthy();
  });

  it("renders title", () => {
    expect(component.find("h3.metric-card__title").exists()).toBeTruthy();
  });

  it("renders correct title", () => {
    expect(component.find("h3.metric-card__title").text()).toBe(title);
  });
});
