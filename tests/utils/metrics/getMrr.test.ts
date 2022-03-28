import { describe, it, expect } from "vitest";

import { getMrr } from "../../../src/utils/metrics/getMrr";

import { contracts } from "../../data/contracts";

describe("getMrr", () => {
  it("returns correct calculation", () => {
    expect(getMrr({ contracts, allowDeletedContracts: false })).equal(953);
  });

  it("returns a number", () => {
    expect(getMrr({ contracts, allowDeletedContracts: false })).toBeTypeOf(
      "number"
    );
  });
});
