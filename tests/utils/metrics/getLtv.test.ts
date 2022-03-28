import { describe, it, expect } from "vitest";

import { getLtv } from "../../../src/utils/metrics/getLtv";

import { contracts } from "../../data/contracts";

describe("getLtv", () => {
  it("returns correct calculation", () => {
    const deletedContracts = contracts.filter((contract) => contract.deletedAt);

    expect(getLtv({ deletedContracts })).toBe(1953);
  });

  it("returns a number", () => {
    const deletedContracts = contracts.filter((contract) => contract.deletedAt);

    expect(getLtv({ deletedContracts })).toBeTypeOf("number");
  });
});
