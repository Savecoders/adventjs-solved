function decodeSantaPin(code: string): string | null {
  const REGEX_PIN = /\[(\d)([+\-]*)\]|\[(<)\]/g
  const pins = [...code.matchAll(REGEX_PIN)]
  const MIN_PIN_LENGTH = 4

  if (pins.length < MIN_PIN_LENGTH) return null

  const { pin } = pins.reduce((acc, [_, digit, ops, recover]) => {
    let num = Number(digit)
    if (recover) {
      num = acc.lastpin
    } else {
      let calculatedOps = ops.length - 2 * (ops.split('-').length - 1)
      console.log(ops.split('-').length - 1)
      num = (num + calculatedOps + 10) % 10
    }
    return { pin: acc.pin + num, lastpin: num }
  }, { pin: '', lastpin: 0 })

  return pin
}

decodeSantaPin('[1++][2-][3+][<]')
// "3144"

decodeSantaPin('[9+][0-][4][<]')
decodeSantaPin('[9+][0-][4][<]')
// "0944"

decodeSantaPin('[1+][2-]')
// null (only 2 digits)
