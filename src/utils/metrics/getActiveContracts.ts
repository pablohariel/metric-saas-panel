import type { IContract } from "@/interfaces/Contract";

interface Params {
  contracts: IContract[];
}

const getActiveContracts = ({ contracts }: Params): IContract[] => {
  return contracts.filter((contract) => !contract.deletedAt);
};

export { getActiveContracts };
