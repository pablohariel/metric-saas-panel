interface IPayment {
  id: number;
  contractId: number | null;
  customerId: number;
  customerName: string;
  value: number;
  originalValue: number;
  netValue: number;
  fineValue: number | null;
  interestValue: number | null;
  dueDate: string;
  originalDueDate: string;
  paidAt: string | null;
  paymentMethod: "credit_card" | "debit_card" | "billet" | "pix" | null;
  receivedAt: string | null;
  status: "received" | "confirmed" | "pending" | "overdue";
  createdAt: string;
  updatedAt: string | null;
  deletedAt: string | null;
}

export { IPayment };
