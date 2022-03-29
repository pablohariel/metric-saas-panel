import { describe, it, expect } from "vitest";

import { getMrr } from "@/utils/metrics/getMrr";

import { contracts } from "@/tests/mockData/contracts";

describe("getMrr", () => {
  it("returns correct calculation", () => {
    const activeContracts = contracts.filter((contract) => !contract.deletedAt);

    const activeContractsMrr = activeContracts.reduce(
      (totalValue, currentContract) => {
        const paymentFrequency = currentContract.paymentFrequency;
        const contractValue = currentContract.totalValue;

        if (paymentFrequency === "yearly") {
          return totalValue + contractValue / 12;
        } else if (paymentFrequency === "semiannually") {
          return totalValue + contractValue / 6;
        } else {
          return totalValue + contractValue;
        }
      },
      0
    );

    expect(getMrr({ contracts, allowDeletedContracts: false })).equal(
      activeContractsMrr
    );
  });

  it("returns a number", () => {
    expect(getMrr({ contracts, allowDeletedContracts: false })).toBeTypeOf(
      "number"
    );
  });
});
