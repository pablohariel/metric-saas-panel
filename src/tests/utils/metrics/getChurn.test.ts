import { describe, it, expect } from "vitest";

import { getChurn } from "@/utils/metrics/getChurn";

import { contracts } from "@/tests/mockData/contracts";

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

    const initialDate = new Date(sortedContracts[1].createdAt);
    const finalDate = new Date(
      sortedContracts[sortedContracts.length - 1].createdAt
    );

    const activeContracts = sortedContracts.filter((contract) => {
      const contractCreateDate = new Date(contract.createdAt);
      contractCreateDate.setHours(0, 0, 0, 0);
      initialDate.setHours(0, 0, 0, 0);

      if (contractCreateDate <= initialDate) {
        if (!contract.deletedAt) {
          return contract;
        } else {
          const contractDeleteDate = new Date(contract.deletedAt).setHours(
            0,
            0,
            0,
            0
          );

          if (contractDeleteDate >= initialDate.setHours(0, 0, 0, 0)) {
            return contract;
          }
        }
      }
    });

    const deletedContracts = sortedContracts.filter((contract) => {
      if (contract.deletedAt) {
        const contractDeleteDate = new Date(contract.deletedAt);
        if (
          contractDeleteDate >= initialDate &&
          contractDeleteDate <= finalDate
        ) {
          return contract;
        }
      }
    });

    const churn = (deletedContracts.length / activeContracts.length) * 100;

    expect(getChurn({ contracts, initialDate, finalDate })).toBe(churn);
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
