export const shortenText = (text: string, limit: number): string => {
  if (text.length <= limit) {
    return text;
  }
  text = text.slice(0, limit);
  const lastSpaceIndex = text.lastIndexOf(" ");
  if (lastSpaceIndex > 0) {
    text = text.slice(0, lastSpaceIndex);
  }
  return text + "...";
};

export const makeStaysBlob = (num: number): string => {
  switch (true) {
    case num === 0:
      return "There are no stays";
    case num === 1:
      return "1 stay";
    case num <= 12:
      return num + " stays";
    default:
      return "12+ stays";
  }
};
