import type { IContract } from "@/interfaces/Contract";

interface IParams {
  contracts: IContract[];
  initialDate: Date;
  finalDate: Date;
}

const getChurn = ({ contracts, initialDate, finalDate }: IParams): number => {
  let activeContractsAmount = 0;
  let canceledContractsAmount = 0;

  initialDate.setHours(0, 0, 0, 0);
  finalDate.setHours(0, 0, 0, 0);

  for (const contract of contracts) {
    const contractCreateDate = new Date(contract.createdAt);
    contractCreateDate.setHours(0, 0, 0, 0);

    if (contractCreateDate <= initialDate) {
      if (contract.deletedAt) {
        const contractDeleteDate = new Date(contract.deletedAt);
        if (contractDeleteDate >= initialDate) {
          activeContractsAmount++;
        }
      } else {
        activeContractsAmount++;
      }
    }

    if (contract.deletedAt) {
      const contractDeleteDate = new Date(contract.deletedAt);
      if (
        contractDeleteDate >= initialDate &&
        contractDeleteDate <= finalDate
      ) {
        canceledContractsAmount++;
      }
    }
  }
  const churn = (canceledContractsAmount / activeContractsAmount) * 100;

  return activeContractsAmount === 0 ? 0 : churn;
};

export { getChurn };
