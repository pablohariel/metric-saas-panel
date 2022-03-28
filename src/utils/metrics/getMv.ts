import type { IContract } from "@/interfaces/Contract";
import { differenceInDays } from "date-fns";

interface IParams {
  deletedContracts: IContract[];
}

const getMv = ({ deletedContracts }: IParams): number => {
  let contractsDurationAmount = 0;

  for (const deletedContract of deletedContracts) {
    if (deletedContract.deletedAt) {
      const contractCreateDate = new Date(deletedContract.createdAt);
      const contractDeleteDate = new Date(deletedContract.deletedAt);

      contractsDurationAmount += differenceInDays(
        contractDeleteDate,
        contractCreateDate
      );
    }
  }

  const days = contractsDurationAmount / deletedContracts.length;

  return days;
};

export { getMv };
