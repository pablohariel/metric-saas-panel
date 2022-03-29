import { describe, it, expect } from "vitest";

import { groupContracts } from "@/utils/groupContracts";
import { getMrr } from "@/utils/metrics/getMrr";
import { getArr } from "@/utils/metrics/getArr";

import { contracts } from "@/tests/mockData/contracts";

describe("getArr", () => {
  it("returns correct calculation", () => {
    const groupedContracts = groupContracts({ contracts });

    const arr = groupedContracts.reduce(
      (totalValue, currentGroupedContract) => {
        const mrr = getMrr({
          contracts: currentGroupedContract.contracts,
          allowDeletedContracts: true,
        });

        return totalValue + mrr;
      },
      0
    );

    expect(getArr({ groupedContracts })).toBe(arr);
  });

  it("returns a number", () => {
    const groupedContracts = groupContracts({ contracts });

    expect(getArr({ groupedContracts })).toBeTypeOf("number");
  });
});
