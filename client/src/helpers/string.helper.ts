export const truncateString = (string = '', maxLength = 50) =>
  string.length > maxLength ? `${string.substring(0, maxLength)}…` : string;

export const removeSpecialSympolForPath = (string: string) => string.replace(/[^\w\s]/gi, '');
