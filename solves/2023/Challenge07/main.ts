function drawGift(size: number, symbol: string): string {
  const skin = "#";

  if (size <= 1) return `${skin}\n`;

  const middle = size - 2;
  const middleBox = skin.repeat(size) + symbol.repeat(middle) + skin + "\n";
  let boxTop = " ".repeat(size - 1) + skin.repeat(size) + "\n";
  let boxBottom = "";

  for (let i = 0; i < middle; i++) {
    boxTop +=
      " ".repeat(middle - i) +
      skin +
      symbol.repeat(middle) +
      skin +
      symbol.repeat(i) +
      skin +
      "\n";
  }

  for (let i = 0; i < middle; i++) {
    boxBottom +=
      skin +
      symbol.repeat(middle) +
      skin +
      symbol.repeat(middle - i - 1) +
      skin +
      "\n";
  }

  boxBottom += skin.repeat(size) + "\n";

  return `${boxTop}${middleBox}${boxBottom}`;
}

console.log(drawGift(1, "+"));
drawGift(4, "+");

/*
   ####
  #++##
 #++#+#
####++#
#++#+#
#++##
####
*/
