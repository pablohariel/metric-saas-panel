import { describe, it, expect } from "vitest";

import { getCac } from "../../../src/utils/metrics/getCac";

import { contracts } from "../../data/contracts";

describe("getCac", () => {
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

    const investmentAmount = 1000;
    const initialDate = new Date(sortedContracts[0].createdAt);
    const finalDate = new Date(
      sortedContracts[sortedContracts.length - 1].createdAt
    );

    expect(
      getCac({ contracts, investmentAmount, initialDate, finalDate })
    ).toBe(investmentAmount / contracts.length);
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

    const investmentAmount = 1000;
    const initialDate = new Date(sortedContracts[0].createdAt);
    const finalDate = new Date(
      sortedContracts[sortedContracts.length - 1].createdAt
    );

    expect(
      getCac({ contracts, investmentAmount, initialDate, finalDate })
    ).toBeTypeOf("number");
  });
});
