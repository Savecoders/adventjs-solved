type ElfDateTime =
  `${number}*${number}*${number}@${number}|${number}|${number} NP`

function timeUntilTakeOff(
  fromTime: ElfDateTime,
  takeOffTime: ElfDateTime
): number {

  const parseElfDateTime = (elfDateTime: ElfDateTime) => {
    const [datePart, timePart] = elfDateTime.split('@')
    const [year, month, day] = datePart.split('*').map(Number)
    const [hours, minutes, seconds] = timePart
      .replace(' NP', '')
      .split('|')
      .map(Number)

    return Date.UTC(year, month - 1, day, hours, minutes, seconds)
  }

  const fromDate = parseElfDateTime(fromTime)
  const takeOffDate = parseElfDateTime(takeOffTime)

  const diffInMilliseconds = takeOffDate - fromDate

  return Math.floor(diffInMilliseconds / 1000)

}

const takeoff = '2025*12*25@00|00|00 NP'

// from December 24, 2025, 23:59:30, 30 seconds before takeoff
console.log(timeUntilTakeOff('2025*12*24@23|59|30 NP', takeoff))
// 30

// exactly at takeoff time
console.log(timeUntilTakeOff('2025*12*25@00|00|00 NP', takeoff))
// 0

// 12 seconds after takeoff
console.log(timeUntilTakeOff('2025*12*25@00|00|12 NP', takeoff))
// -12
