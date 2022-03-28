interface IContract {
  id: number;
  customerName: string;
  customerId: number;
  paymentFrequency: "monthly" | "semiannually" | "yearly";
  paymentMethod: string | null;
  paymentRepeats: number | null;
  nextDueDate: string | null;
  fulfilled: boolean;
  totalValue: number;
  createdAt: string;
  updatedAt: string | null;
  deletedAt: string | null;
}

export { IContract };
