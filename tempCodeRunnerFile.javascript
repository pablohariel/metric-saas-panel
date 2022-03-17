let dateNow = new Date()
  const dateLastYear = new Date(new Date().setFullYear(dateNow.getFullYear() - 1))

  let count = 1
  var firstDay = new Date(dateNow.getFullYear(), dateNow.getMonth(), 1);
  var lastDay = new Date(dateNow.getFullYear(), dateNow.getMonth() + 1, 0);

  console.log(firstDay)

  console.log(dateNow > dateLastYear)
  while(dateNow > dateLastYear) {
    dateNow = new Date(dateNow.setMonth(dateNow.getMonth() - 1))
  }

