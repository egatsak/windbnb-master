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
