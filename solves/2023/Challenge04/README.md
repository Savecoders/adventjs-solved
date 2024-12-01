# Challenge #4

In 🎅 Santa's workshop, some Christmas messages have been written in a peculiar way: the words within the brackets must be read backwards.

Santa needs these messages to be correctly formatted. Your task is to write a function that takes a string and reverses the characters within each pair of parentheses, removing the parentheses as well.

However, bear in mind that there may be nested parentheses, so you should reverse the characters in the correct order.

```js
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

```

## Mi Solucion

```js
function findFirstRepeated(gifts) {
  return gifts.find((gift, index) => gifts.indexOf(gift) !== index) ?? -1;
}

```
