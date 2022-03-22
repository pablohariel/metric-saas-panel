import type { IContract } from "@/interfaces/Contract"
import { differenceInDays } from 'date-fns'

interface IParams {
  deletedContracts: IContract[]
}

const getMv = ({ deletedContracts }: IParams): string => {
  let contractsDurationAmount = 0

  for(const deletedContract of deletedContracts) {
    if(deletedContract.deletedAt) {
      const contractCreateDate = new Date(deletedContract.createdAt)
      const contractDeleteDate = new Date(deletedContract.deletedAt)

      contractsDurationAmount += differenceInDays(contractDeleteDate, contractCreateDate)
    }
  }

  const days = contractsDurationAmount / deletedContracts.length
  const years = days / 365

  if(days > 365) {
    if(years >= 2) {
      return `${years.toFixed(2)} anos`
    } else {
      return `${years.toFixed(0)} ano`
    }
  } else {
    return `${Math.floor(days)} dias`
  }
}

export { getMv }