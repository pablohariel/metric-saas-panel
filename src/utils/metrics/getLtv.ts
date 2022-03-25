import type { IContract } from "@/interfaces/Contract";
import { differenceInMonths } from "date-fns";

interface IParams {
  deletedContracts: IContract[];
}

const getLtv = ({ deletedContracts }: IParams): number => {
  let contractsValueAmount = 0;

  for (const deletedContract of deletedContracts) {
    if (deletedContract.deletedAt) {
      const contractCreateDate = new Date(deletedContract.createdAt);
      const contractDeleteDate = new Date(deletedContract.deletedAt);

      const contractDurationMonths = differenceInMonths(
        contractDeleteDate,
        contractCreateDate
      );

      let valueAmount = 0;

      if (deletedContract.paymentFrequency === "yearly") {
        valueAmount =
          contractDurationMonths * (deletedContract.totalValue / 12);
      } else if (deletedContract.paymentFrequency === "semiannually") {
        valueAmount = contractDurationMonths * (deletedContract.totalValue / 6);
      } else {
        valueAmount = contractDurationMonths * deletedContract.totalValue;
      }

      contractsValueAmount += valueAmount;
    }
  }

  const ltv = contractsValueAmount / deletedContracts.length;

  return ltv;
};

export { getLtv };
