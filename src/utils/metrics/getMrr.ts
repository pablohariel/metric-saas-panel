import type { IContract } from "@/interfaces/Contract"

interface IParams {
  contracts: IContract[]
}

// calculate Monthly Recurring Revenue
const getMrr = ({ contracts } : IParams): number => {
  const mrr = contracts.reduce((acumulator, contract) => {
    if(contract.deletedAt) {
      return acumulator
    }

    if(contract.paymentFrequency === 'yearly') {
      const totalValue = contract.totalValue / 12
      return acumulator + totalValue
    } 
    return acumulator + contract.totalValue
  }, 0)

  return Math.floor(mrr) 
}

export { getMrr }