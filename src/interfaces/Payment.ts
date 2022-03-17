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
  paymentMethod?: 'credit_card' | 'billet' | 'pix',
  receivedAt?: string,
  status: string,
  createdAt: string,
  updatedAt?: string,
  deletedAt?: string
}

export { IPayment }