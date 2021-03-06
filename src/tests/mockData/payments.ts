import type { IPayment } from "@/interfaces/Payment";

const payments: IPayment[] = [
  {
    id: 1901,
    contractId: null,
    customerId: 1904,
    customerName: "Pedro Imóveis",
    value: 5,
    originalValue: 5,
    netValue: 5,
    fineValue: null,
    interestValue: null,
    dueDate: "2019-12-07T00:00:00.000Z",
    originalDueDate: "2019-12-07T00:00:00.000Z",
    paidAt: null,
    paymentMethod: null,
    receivedAt: null,
    status: "confirmed",
    createdAt: "2020-09-16T06:18:54.000Z",
    updatedAt: null,
    deletedAt: null,
  },
  {
    id: 2103,
    contractId: null,
    customerId: 1904,
    customerName: "João Imóveis",
    value: 5,
    originalValue: 5,
    netValue: 5,
    fineValue: null,
    interestValue: null,
    dueDate: "2021-03-03T00:00:00.000Z",
    originalDueDate: "2020-03-19T00:00:00.000Z",
    paidAt: null,
    paymentMethod: "credit_card",
    receivedAt: null,
    status: "pending",
    createdAt: "2020-09-16T06:19:09.000Z",
    updatedAt: null,
    deletedAt: "2021-03-30T19:51:51.000Z",
  },
  {
    id: 4773,
    contractId: null,
    customerId: 1728,
    customerName: "Pedro Imóveis",
    value: 289,
    originalValue: 289,
    netValue: 276.98,
    fineValue: 5,
    interestValue: 0.9,
    dueDate: "2022-02-10T00:00:00.000Z",
    originalDueDate: "2022-02-10T00:00:00.000Z",
    paidAt: null,
    paymentMethod: "debit_card",
    receivedAt: null,
    status: "pending",
    createdAt: "2022-01-02T10:39:58.000Z",
    updatedAt: "2022-01-03T02:40:21.646Z",
    deletedAt: "2022-01-03T02:40:21.646Z",
  },
  {
    id: 4755,
    contractId: null,
    customerId: 1729,
    customerName: "Pedro Imóveis",
    value: 269,
    originalValue: 269,
    netValue: 257.78,
    fineValue: 5,
    interestValue: 0.9,
    dueDate: "2021-12-15T00:00:00.000Z",
    originalDueDate: "2021-12-15T00:00:00.000Z",
    paidAt: null,
    paymentMethod: "pix",
    receivedAt: null,
    status: "overdue",
    createdAt: "2021-11-06T09:16:02.000Z",
    updatedAt: "2022-01-03T02:40:21.430Z",
    deletedAt: "2022-01-03T02:40:21.430Z",
  },
];

export { payments };
