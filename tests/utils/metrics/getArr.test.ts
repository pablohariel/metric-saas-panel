import { describe, it, expect } from "vitest";

import { groupContracts } from "../../../src/utils/groupContracts";
import { getArr } from "../../../src/utils/metrics/getArr";

import { contracts } from "../../data/contracts";

describe("getArr", () => {
  it("returns correct calculation", () => {
    const groupedContracts = groupContracts({ contracts });

    expect(getArr({ groupedContracts })).toBe(11994);
  });

  it("returns a number", () => {
    const groupedContracts = groupContracts({ contracts });

    expect(getArr({ groupedContracts })).toBeTypeOf("number");
  });
});
