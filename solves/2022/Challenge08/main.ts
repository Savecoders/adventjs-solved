function checkPart(part: string) {
  const reverseArr = (str: string) => [...str].reverse().join("");

  // Check if the string is already a palindrome
  if (reverseArr(part) === part) return true;

  // Check if removing one character makes the string a palindrome
  return [...part].some((_, index) => {
    const slicePart = part.substring(0, index) + part.substring(index + 1);
    return slicePart === reverseArr(slicePart);
  });
}

export { checkPart };
