import type { IContract } from "@/interfaces/Contract"
import { add } from "date-fns"

interface IParams {
  deletedContracts: IContract[],
  initialDate: Date,
  finalDate: Date
}

interface IChurnChartData {
  key: string,
  amount: number,
  month: string
}

const getChurnChartData = ({ deletedContracts, initialDate, finalDate }: IParams): IChurnChartData[] => {
  const churnChartData = [] as IChurnChartData[]

  for(const deletedContract of deletedContracts) {
    if(deletedContract.deletedAt) {
      const contractDeleteData = new Date(deletedContract.deletedAt)

      if(contractDeleteData >= initialDate && contractDeleteData <= finalDate) {
        let dataFound = false
        const contractKey = `${contractDeleteData.getMonth()+1}-${contractDeleteData.getFullYear()}`

        for(const churnData of churnChartData) {
          if(churnData.key === contractKey) {
            dataFound = true
            churnData.amount++
          }
        }

        const deleteMonth = contractDeleteData.toLocaleString('pt-BR', { month: 'long', year: 'numeric' })

        if(!dataFound) {
          churnChartData.push({
            key: contractKey,
            amount: 1,
            month: deleteMonth
          })
        } 

      }
    }
  }
  
  return churnChartData
}

export { getChurnChartData, IChurnChartData }