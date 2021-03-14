export const validateEmail = (email: string): boolean => {
  const regExpId = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  return regExpId.test(email);
};

export const validatePw = (pw: any): boolean => {
  const regExpPw = /(?=.*\d{1,50})(?=.*[~`!@#$%\^&*()-+=]{1,50})(?=.*[a-zA-Z]{2,50}).{8,50}$/;
  return regExpPw.test(pw);
};
