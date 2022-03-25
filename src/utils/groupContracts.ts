import type { IContract } from "@/interfaces/Contract";

interface IParams {
  contracts: IContract[];
}

interface IGroupedContract {
  key: string;
  contracts: IContract[];
}

// group contracts by active month (from one year)
const groupContracts = ({ contracts }: IParams): IGroupedContract[] => {
  const groupedContracts = [] as IGroupedContract[];

  let dateNow = new Date();
  const dateLastYear = new Date(
    new Date().setFullYear(dateNow.getFullYear() - 1)
  );

  while (dateNow > dateLastYear) {
    for (const contract of contracts) {
      const contractCreateDate = new Date(contract.createdAt);
      const contractDeletedDate = new Date(contract.deletedAt || new Date());

      const monthBegin = new Date(dateNow.getFullYear(), dateNow.getMonth(), 1);
      const monthEnd = new Date(
        dateNow.getFullYear(),
        dateNow.getMonth() + 1,
        0
      );

      if (contractDeletedDate > monthBegin && contractCreateDate < monthEnd) {
        let groupFound = false;
        const key = `${monthBegin.getMonth() + 1}-${monthBegin.getFullYear()}`;

        for (const groupedContract of groupedContracts) {
          if (groupedContract.key === key) {
            groupFound = true;
            groupedContract.contracts.push(contract);
          }
        }

        if (!groupFound) {
          groupedContracts.push({
            key,
            contracts: [contract],
          });
        }
      }
    }

    dateNow = new Date(dateNow.setMonth(dateNow.getMonth() - 1));
  }

  return groupedContracts;
};

export { groupContracts, IGroupedContract };
