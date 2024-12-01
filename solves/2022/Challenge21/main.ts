function printTable(gifts: { name: string; quantity: number }[]) {
  const giftLen = Math.max(
    ...gifts.map(({ name }) => {
      return name.length;
    }),
    // 4 is the length of the word "Gift"
    4,
  );
  const quantityLen = Math.max(
    ...gifts.map(({ quantity }) => {
      return `${quantity}`.length;
    }),
    // 8 is the length of the word "Quantity"
    8,
  );

  //generate the top and bottom of the table
  const bottom = `**${"*".repeat(giftLen)}***${"*".repeat(quantityLen)}**`;
  const top = `++${"+".repeat(giftLen)}+++${"+".repeat(quantityLen)}++\n`;
  const giftSpace = `Gift${" ".repeat(giftLen - 4)}`;
  const quantifySpace = `Quantity${" ".repeat(quantityLen - 8)}`;
  const header = `| ${giftSpace} | ${quantifySpace} |\n`;
  const divider = `| ${"-".repeat(giftLen)} | ${"-".repeat(quantityLen)} |\n`;

  // body of the table
  const body = gifts
    .map(({ name, quantity }) => {
      const nLen = name.length;
      const qLen = quantity.toString().length;
      const nBody = `${name}${" ".repeat(giftLen - nLen)}`;
      const qBody = `${quantity}${" ".repeat(quantityLen - qLen)}`;
      return `| ${nBody} | ${qBody} |\n`;
    })
    .join("");
  return top + header + divider + body + bottom;
}

export { printTable };
