import type { IContract } from "@/interfaces/Contract";

interface IParams {
  investmentAmount: number;
  contracts: IContract[];
  initialDate: Date;
  finalDate: Date;
}

const getCac = ({
  contracts,
  investmentAmount,
  finalDate,
  initialDate,
}: IParams): number => {
  let clientsAmount = 0;

  for (const contract of contracts) {
    const contractCreateDate = new Date(contract.createdAt);

    if (contractCreateDate >= initialDate && contractCreateDate <= finalDate) {
      clientsAmount++;
    }
  }

  if (clientsAmount < 1) {
    return 0;
  }

  return investmentAmount / clientsAmount;
};

export { getCac };
