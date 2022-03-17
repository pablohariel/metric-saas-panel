import type { IContract } from "@/interfaces/Contract"

interface IParams {
  contracts: IContract[]
}

const getMrr = ({ contracts } : IParams): number => {
  const mrr = contracts.reduce((acumulator, contract) => {
    if(contract.paymentFrequency === 'yearly') {
      const totalValue = contract.totalValue / 12
      return acumulator + totalValue
    } 
    return acumulator + contract.totalValue
  }, 0)

  return Math.floor(mrr) 
}

export { getMrr }