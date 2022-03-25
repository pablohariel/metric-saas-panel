import type { IContract } from "@/interfaces/Contract";

interface IParams {
  contracts: IContract[];
  sortBy: "createdAt" | "deletedAt";
}

const sortContracts = ({ contracts, sortBy }: IParams): IContract[] => {
  switch (sortBy) {
    case "createdAt": {
      const sortedContracts = contracts.sort(
        (firstContract, secondContract) => {
          const firstContractCreateDate = new Date(firstContract.createdAt);
          const secondContractCreateDate = new Date(secondContract.createdAt);

          if (firstContractCreateDate > secondContractCreateDate) {
            return 1;
          }

          if (firstContractCreateDate < secondContractCreateDate) {
            return -1;
          }

          return 0;
        }
      );

      return sortedContracts;
    }
    case "deletedAt": {
      const sortedContracts = contracts.sort(
        (firstContract, secondContract) => {
          if (firstContract.deletedAt && secondContract.deletedAt) {
            const firstContractDeleteDate = new Date(firstContract.deletedAt);
            const secondContractDeleteDate = new Date(secondContract.deletedAt);

            if (firstContractDeleteDate > secondContractDeleteDate) {
              return 1;
            }

            if (firstContractDeleteDate < secondContractDeleteDate) {
              return -1;
            }
          }
          return 0;
        }
      );

      return sortedContracts;
    }
  }
};

export { sortContracts };
