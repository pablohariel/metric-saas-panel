/**
 * @jest-environment jsdom
 */

import { describe, expect, it } from "vitest";
import { shallowMount } from "@vue/test-utils";

import { customers } from "@/tests/mockData/customers";

import Table from "@/components/CustomerStatistics/Table/index.vue";

describe("CustomerStatistics.vue", () => {
  const component = shallowMount(Table, {
    props: {
      customers,
    },
  });

  it("renders table", () => {
    expect(component.find("table.customer-table").exists()).toBeTruthy();
  });

  it("renders caption", () => {
    expect(component.find(".customer-table__caption").exists()).toBeTruthy();
  });

  it("renders all columns", () => {
    const columns = component.findAll("thead.customer-table__header tr th");

    expect(columns).toHaveLength(16);
  });

  it("renders the right amount of data", () => {
    const tableData = component.findAll("tbody.customer-table__body tr");

    expect(tableData).toHaveLength(customers.length);
  });
});
