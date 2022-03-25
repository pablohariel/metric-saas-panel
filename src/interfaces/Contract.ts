interface IContract {
  id: number;
  customerName: string;
  customerId: number;
  paymentFrequency: "monthly" | "semiannually" | "yearly";
  paymentMethod?: string;
  paymentRepeats?: number;
  nextDueDate?: string;
  fulfilled: boolean;
  totalValue: number;
  createdAt: string;
  updatedAt?: string;
  deletedAt?: string;
}

export { IContract };
