function decode(message) {
  const regex = /\(([^()]+)\)/;
  let match = message.match(regex);
  while (match) {
    const reversed = match[1].split("").reverse().join("");
    message = message.replace(match[0], reversed);
    match = message.match(regex);
  }
  return message;
}

const a = decode("hola (odnum)");
console.log(a); // hola mundo

const b = decode("(olleh) (dlrow)!");
console.log(b); // hello world!

const c = decode("sa(u(cla)atn)s");
console.log(c); // santaclaus
