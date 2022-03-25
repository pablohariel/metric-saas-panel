import type { IContract } from "@/interfaces/Contract";
import type { IGroupedContract } from "../groupContracts";
import { getMrr } from "./getMrr";

interface IParams {
  groupedContracts: IGroupedContract[];
}

const getArr = ({ groupedContracts }: IParams): number => {
  const arr = groupedContracts.reduce((acumulator, groupedContract) => {
    const mrr = getMrr({
      contracts: groupedContract.contracts,
      allowDeletedContracts: true,
    });

    return acumulator + mrr;
  }, 0);

  return Math.floor(arr);
};

export { getArr };
