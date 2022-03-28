import { describe, it, expect } from "vitest";

import { getFp } from "../../../src/utils/metrics/getFp";

import { payments } from "../../data/payments";

describe("getFp", () => {
  it("returns correct card calculation", () => {
    const cardPaymentAmount = payments.filter(
      (payment) =>
        payment.paymentMethod === "credit_card" ||
        payment.paymentMethod === "debit_card"
    ).length;

    expect(getFp({ payments }).card.amountUsed).toBe(cardPaymentAmount);
  });

  it("returns correct billet calculation", () => {
    const billetPaymentAmount = payments.filter(
      (payment) => payment.paymentMethod === "billet"
    ).length;

    expect(getFp({ payments }).billet.amountUsed).toBe(billetPaymentAmount);
  });

  it("returns correct pix calculation", () => {
    const pixPaymentAmount = payments.filter(
      (payment) => payment.paymentMethod === "pix"
    ).length;

    expect(getFp({ payments }).pix.amountUsed).toBe(pixPaymentAmount);
  });

  it("returns an object", () => {
    expect(getFp({ payments })).toBeTypeOf("object");
  });
});
