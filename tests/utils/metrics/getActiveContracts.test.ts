import { describe, it, expect } from "vitest";

import { getActiveContracts } from "../../../src/utils/metrics/getActiveContracts";

import { contracts } from "../../data/contracts";

describe("getActiveContracts", () => {
  it("returns only active contracts", () => {
    const activeContracts = contracts.filter((contract) => !contract.deletedAt);

    expect(getActiveContracts({ contracts }).length).equal(
      activeContracts.length
    );
  });

  it("ignores deleted contracts", () => {
    const deletedContracts = contracts.filter((contract) => contract.deletedAt);

    expect(getActiveContracts({ contracts: deletedContracts }).length).equal(0);
  });

  it("returns an array", () => {
    expect(getActiveContracts({ contracts })).toBeInstanceOf(Array);
  });

  it("returns an array of objects", () => {
    expect(getActiveContracts({ contracts })[0]).toBeTypeOf("object");
  });
});
