function drawGift(size: number, symbol: string): string {
  if (size < 2) return ""
  const BORDERS = 2;
  const INNER_WIDTH = size - BORDERS;
  const INNER = `${symbol}${" ".repeat(INNER_WIDTH)}${symbol}\n`
  const TOP_DOWN = `${symbol.repeat(size)}`
  return `${TOP_DOWN}\n${INNER.repeat(INNER_WIDTH)}${TOP_DOWN}`
}
