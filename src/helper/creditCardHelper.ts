const clearString = (dirtyString: string) => {
  return dirtyString.replace(/\D/g, '').replace(/\s/g, '').replace(/\//g, '')
}

const creditCardStringBuilder = (creditCardString: string) => {
  if (creditCardString.length > 12) {
    return `${creditCardString.slice(0, 4)} ${creditCardString.slice(
      4,
      8,
    )} ${creditCardString.slice(8, 12)} ${creditCardString.slice(12, 16)}`;
  }

  if (creditCardString.length > 8) {
    return `${creditCardString.slice(0, 4)} ${creditCardString.slice(
      4,
      8,
    )} ${creditCardString.slice(8, 12)}`;
  }

  if (creditCardString.length > 4) {
    return `${creditCardString.slice(0, 4)} ${creditCardString.slice(4, 8)}`;
  }

  return `${creditCardString.slice(0, 4)}`;
};

export const onCreditCardStringChange = (event: React.ChangeEvent<HTMLInputElement>): string => {
  const clearedString = clearString(event.target.value);
  return creditCardStringBuilder(clearedString);
};

const expiryDateStringBuilder = (expiryDateString: string) => {
  if (expiryDateString.length > 2) {
    return `${expiryDateString.slice(0, 2)} / ${expiryDateString.slice(
      2,
      4,
    )}`;
  }

  return `${expiryDateString.slice(0, 2)}`;
};

export const onExpiryDateStringChange = (event: React.ChangeEvent<HTMLInputElement>): string => {
  const clearedString = clearString(event.target.value);
  return expiryDateStringBuilder(clearedString);
};

const securityCodeStringBuilder = (expiryDateString: string) => {
  return expiryDateString.slice(0, 3);
};
export const onSecurityCodeStringChange = (event: React.ChangeEvent<HTMLInputElement>): string => {
  const clearedString = clearString(event.target.value);
  return securityCodeStringBuilder(clearedString);
};