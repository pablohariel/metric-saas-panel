interface ICustomer {
  customerName: string;
  contract: {
    totalValue: number;
    createdAt: string;
    paymentMethod?: "billet" | "credit_card" | undefined;
  };
  users: number;
  lastLead: string;
  lastProperty: string;
  customers: number;
  calls: number;
  properties: number;
  outdatedProperties: number;
  inactiveProperties: number;
  images: number;
  condominiums: number;
  portals: string[];
  notes: number;
}

export { ICustomer };
