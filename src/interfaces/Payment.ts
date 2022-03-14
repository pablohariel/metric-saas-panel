interface IPayment {
  id: number,
  contractId?: number,
  customerId: number,
  customerName: string,
  value: number,
  originalValue: number,
  netValue: number,
  fineValue?: number,
  interestValue?: number,
  dueDate: string,
  originalDueDate: string,
  paidAt?: string,
  paymentMethod?: string,
  receivedAt?: string,
  status: string,
  createdAt: string,
  updatedAt?: string,
  deletedAt?: string
}

export { IPayment }