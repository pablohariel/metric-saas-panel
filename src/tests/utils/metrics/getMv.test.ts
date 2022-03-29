import { describe, it, expect } from "vitest";
import { differenceInDays } from "date-fns";

import { getMv } from "@/utils/metrics/getMv";

import { contracts } from "@/tests/mockData/contracts";

describe("getMv", () => {
  it("returns correct calculation", () => {
    const deletedContracts = contracts.filter((contract) => contract.deletedAt);

    const totalTime = deletedContracts.reduce((totalValue, currentContract) => {
      if (currentContract.deletedAt) {
        const contractCreateDate = new Date(currentContract.createdAt);
        const contractDeleteDate = new Date(currentContract.deletedAt);

        const differenceInDaysValue = differenceInDays(
          contractDeleteDate,
          contractCreateDate
        );
        return totalValue + differenceInDaysValue;
      } else {
        return totalValue;
      }
    }, 0);

    const mv = totalTime / deletedContracts.length;

    expect(getMv({ deletedContracts })).toBe(mv);
  });

  it("returns a number", () => {
    const deletedContracts = contracts.filter((contract) => contract.deletedAt);

    expect(getMv({ deletedContracts })).toBeTypeOf("number");
  });
});
