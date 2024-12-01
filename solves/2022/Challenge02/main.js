
const year = 2022
const holidays = ['01/06', '04/01', '12/25'] // formato MM/DD

const countHours = (year, holidays) => holidays.filter((holiday) => {
  const date = new Date(`${holiday}/${year}`)
  return date.getDay() !== 0 && date.getDay() !== 6
}).length * 2


console.log(countHours(year, holidays))
console.log(new Date('2022-01-06').toDateString())

// 132 + 122 = 254 || 274

