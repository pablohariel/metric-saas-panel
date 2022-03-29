import type { ICustomer } from "@/interfaces/Customer";

const customers: ICustomer[] = [
  {
    customerName: "João Imóveis",
    contract: {
      totalValue: 339,
      createdAt: "2020-09-16T06:18:06.000Z",
      paymentMethod: null,
    },
    users: 1,
    lastLead: "2022-02-18T02:10:23.831Z",
    lastProperty: "2021-11-05T04:55:05.426Z",
    customers: 452,
    calls: 434,
    properties: 1212,
    outdatedProperties: 24,
    inactiveProperties: 765,
    images: 6737,
    condominiums: 566,
    portals: ["olx"],
    notes: 5623,
  },
  {
    customerName: "Cleiton Imóveis",
    contract: {
      totalValue: 279,
      createdAt: "2020-09-16T06:18:06.000Z",
      paymentMethod: null,
    },
    users: 9,
    lastLead: "2022-02-20T13:29:10.644Z",
    lastProperty: "2022-01-02T15:47:38.122Z",
    customers: 1261,
    calls: 6221,
    properties: 1442,
    outdatedProperties: 779,
    inactiveProperties: 878,
    images: 1232,
    condominiums: 104,
    portals: ["zap"],
    notes: 8856,
  },
];

export { customers };
