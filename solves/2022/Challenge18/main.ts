function dryNumber(dry:number, numbers:number):number[] {
  return Array
    .from({length: numbers}, (_, i) => i + 1)
    .filter((num)=> `${num}`.includes(`${dry}`))
}

export { dryNumber };