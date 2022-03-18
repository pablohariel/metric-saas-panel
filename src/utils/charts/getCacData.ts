import type { IContract } from "@/interfaces/Contract"

interface IParams {
  contracts: IContract[],
  initialDate: Date,
  finalDate: Date
}

interface ICacChartData {
  key: string,
  amount: number,
  month: string
}

const getCacChartData = ({ contracts, initialDate, finalDate }: IParams): ICacChartData[] => {
  const cacChartData = [] as ICacChartData[]

  for(const contract of contracts) {
    const contractCreateData = new Date(contract.createdAt)

    if(contractCreateData >= initialDate && contractCreateData <= finalDate) {
      let dataFound = false
      const contractKey = `${contractCreateData.getMonth()+1}-${contractCreateData.getFullYear()}`

      for(const cacData of cacChartData) {
        if(cacData.key === contractKey) {
          dataFound = true
          cacData.amount++
        }
      }

      const createMonth = contractCreateData.toLocaleString('pt-BR', { month: 'long', year: 'numeric' })

      if(!dataFound) {
        cacChartData.push({
          key: contractKey,
          amount: 1,
          month: createMonth
        })
      } 

    }
  }

  return cacChartData
}

export { getCacChartData, ICacChartData }