import type { IContract } from "@/interfaces/Contract";

interface IParams {
  contracts: IContract[];
  allowDeletedContracts: boolean;
}

const getMrr = ({
  contracts,
  allowDeletedContracts = true,
}: IParams): number => {
  const validContracts = allowDeletedContracts
    ? contracts
    : contracts.filter((contract) => !contract.deletedAt);

  const mrr = validContracts.reduce((acumulator, contract) => {
    if (contract.paymentFrequency === "yearly") {
      const totalValue = contract.totalValue / 12;
      return acumulator + totalValue;
    }
    if (contract.paymentFrequency === "semiannually") {
      const totalValue = contract.totalValue / 6;
      return acumulator + totalValue;
    }
    return acumulator + contract.totalValue;
  }, 0);

  return Math.floor(mrr);
};

export { getMrr };
