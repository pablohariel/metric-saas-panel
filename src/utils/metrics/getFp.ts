import type { IPayment } from "@/interfaces/Payment";

interface IParams {
  payments: IPayment[];
}

type PaymentType = "credit_card" | "debit_card" | "billet" | "pix";

interface IPaymentMethod {
  paymentMethod: PaymentType;
  amountUsed: number;
}

interface IFp {
  card: {
    amountUsed: number;
    average: string;
  };
  billet: {
    amountUsed: number;
    average: string;
  };
  pix: {
    amountUsed: number;
    average: string;
  };
}

const getFp = ({ payments }: IParams): IFp => {
  const paymentsMethod = [
    {
      amountUsed: 0,
      paymentMethod: "credit_card",
    },
    {
      amountUsed: 0,
      paymentMethod: "debit_card",
    },
    {
      amountUsed: 0,
      paymentMethod: "billet",
    },
    {
      amountUsed: 0,
      paymentMethod: "pix",
    },
  ] as IPaymentMethod[];

  for (const payment of payments) {
    if (payment.paymentMethod) {
      for (const paymentMethod of paymentsMethod) {
        if (payment.paymentMethod === paymentMethod.paymentMethod) {
          paymentMethod.amountUsed++;
        }
      }
    }
  }

  const creditCardAmount = paymentsMethod.filter(
    (paymentMethod) => paymentMethod.paymentMethod === "credit_card"
  )[0].amountUsed;
  const debitCardAmount = paymentsMethod.filter(
    (paymentMethod) => paymentMethod.paymentMethod === "debit_card"
  )[0].amountUsed;
  const cardAmount = creditCardAmount + debitCardAmount;
  const billetAmount = paymentsMethod.filter(
    (paymentMethod) => paymentMethod.paymentMethod === "billet"
  )[0].amountUsed;
  const pixAmount = paymentsMethod.filter(
    (paymentMethod) => paymentMethod.paymentMethod === "pix"
  )[0].amountUsed;

  const totalAmount = cardAmount + billetAmount + pixAmount;

  const cardAvg = `${((cardAmount / totalAmount) * 100).toFixed(2)}%`;
  const billetAvg = `${((billetAmount / totalAmount) * 100).toFixed(2)}%`;
  const pixAvg = `${((pixAmount / totalAmount) * 100).toFixed(2)}%`;

  const fp = {
    card: {
      amountUsed: cardAmount,
      average: cardAvg,
    },
    billet: {
      amountUsed: billetAmount,
      average: billetAvg,
    },
    pix: {
      amountUsed: pixAmount,
      average: pixAvg,
    },
  } as IFp;

  return fp;
};

export { getFp, IFp };
