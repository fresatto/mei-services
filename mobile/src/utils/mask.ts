export function maskPhone(value: string): string {
  const numericValue = value.replace(/\D/g, "");

  if (numericValue.length === 0) {
    return "";
  }

  if (numericValue.length <= 2) {
    return `(${numericValue}`;
  }

  if (numericValue.length <= 7) {
    return `(${numericValue.slice(0, 2)}) ${numericValue.slice(2)}`;
  }

  if (numericValue.length <= 11) {
    return `(${numericValue.slice(0, 2)}) ${numericValue.slice(
      2,
      7
    )}-${numericValue.slice(7)}`;
  }

  return numericValue;
}
