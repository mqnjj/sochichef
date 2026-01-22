export const isValidPhoneNumber = (a: string): boolean => {
  const number: string = a.replace(/[^+\d]/g, '');
  const valid: RegExp = /^\+?\d{10,15}$/;
  return valid.test(number);
};

export const isValidEmail = (a: string): boolean => {
  const valid: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return valid.test(a);
};

export const isValidName = (a: string | null | undefined): boolean => {
  if (a !== null && a !== undefined && a.trim().length > 0) {
    return /^[А-Яа-яA-Za-z\s]+$/.test(a);
  } else {
    return false;
  }
};
