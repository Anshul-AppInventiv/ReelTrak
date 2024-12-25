export const validateEmail = (text: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(text);
};

export const validateName = (text: string) => {
  const nameRegex = /^[A-Za-z]{3,}$/;
  return nameRegex.test(text);
};
