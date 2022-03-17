interface IParams {
  dates: Date[]
}

export interface IJoinedDate {
  key: string,
  amount: number,
  month: string
}

// join dates by month
const joinDates = ({ dates }: IParams): Array<IJoinedDate> => {
  const joinedDates = [] as IJoinedDate[]

  for(const date of dates) {
    let dateFound = false
    const key = `${date.getMonth()+1}-${date.getFullYear()}`

    for(const joinedDate of joinedDates) {
      if(joinedDate.key === key) {
        dateFound = true
        joinedDate.amount++
      }
    }

   const month = date.toLocaleString('pt-BR', { month: 'long', year: 'numeric' })

    if(!dateFound) {
      joinedDates.push({
        key,
        amount: 1,
        month
      })
    }
  }

  return joinedDates
}

export { joinDates }