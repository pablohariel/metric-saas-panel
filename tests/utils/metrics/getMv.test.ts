import { describe, it, expect } from "vitest";

import { getMv } from "../../../src/utils/metrics/getMv";

import { contracts } from "../../data/contracts";

describe("getMv", () => {
  it("returns correct calculation", () => {
    const deletedContracts = contracts.filter((contract) => contract.deletedAt);

    expect(getMv({ deletedContracts })).toBe(230);
  });

  it("returns a string", () => {
    const deletedContracts = contracts.filter((contract) => contract.deletedAt);

    expect(getMv({ deletedContracts })).toBeTypeOf("number");
  });
});
