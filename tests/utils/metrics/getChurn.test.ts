import { describe, it, expect } from "vitest";

import { getChurn } from "../../../src/utils/metrics/getChurn";

import { contracts } from "../../data/contracts";

describe("getChurn", () => {
  it("returns correct calculation", () => {
    const sortedContracts = contracts.sort((leftContract, rightContract) => {
      if (leftContract.createdAt > rightContract.createdAt) {
        return 1;
      }
      if (leftContract.createdAt < rightContract.createdAt) {
        return -1;
      }
      return 0;
    });

    const initialDate = new Date(sortedContracts[0].createdAt);
    const finalDate = new Date(
      sortedContracts[sortedContracts.length - 1].createdAt
    );

    expect(getChurn({ contracts, initialDate, finalDate })).toBe(0);
  });

  it("returns a number", () => {
    const sortedContracts = contracts.sort((leftContract, rightContract) => {
      if (leftContract.createdAt > rightContract.createdAt) {
        return 1;
      }
      if (leftContract.createdAt < rightContract.createdAt) {
        return -1;
      }
      return 0;
    });

    const initialDate = new Date(sortedContracts[0].createdAt);
    const finalDate = new Date(
      sortedContracts[sortedContracts.length - 1].createdAt
    );

    expect(getChurn({ contracts, initialDate, finalDate })).toBeTypeOf(
      "number"
    );
  });
});
