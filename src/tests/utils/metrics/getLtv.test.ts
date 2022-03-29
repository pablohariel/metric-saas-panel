import { describe, it, expect } from "vitest";
import { differenceInMonths } from "date-fns";

import { getLtv } from "@/utils/metrics/getLtv";

import { contracts } from "@/tests/mockData/contracts";

describe("getLtv", () => {
  it("returns correct calculation", () => {
    const deletedContracts = contracts.filter((contract) => contract.deletedAt);

    const deletedContractsTotalValue = deletedContracts.reduce(
      (totalValue, currentContract) => {
        if (currentContract.deletedAt) {
          const contractValue = currentContract.totalValue;
          const paymentFrequency = currentContract.paymentFrequency;

          const contractCreateDate = new Date(currentContract.createdAt);
          const contractDeleteDate = new Date(currentContract.deletedAt);

          const contractDuration = differenceInMonths(
            contractDeleteDate,
            contractCreateDate
          );

          if (paymentFrequency === "yearly") {
            return totalValue + contractDuration * (contractValue / 12);
          } else if (paymentFrequency === "semiannually") {
            return totalValue + contractDuration * (contractValue / 6);
          } else {
            return totalValue + contractDuration * contractValue;
          }
        } else {
          return totalValue;
        }
      },
      0
    );

    const lvt = deletedContractsTotalValue / deletedContracts.length;

    expect(getLtv({ deletedContracts })).toBe(lvt);
  });

  it("returns a number", () => {
    const deletedContracts = contracts.filter((contract) => contract.deletedAt);

    expect(getLtv({ deletedContracts })).toBeTypeOf("number");
  });
});
