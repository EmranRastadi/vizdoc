export const LoginValidation = (token) => {
  try {
    if (token) {
      return true;
    } else {
      return false;
    }
  } catch {
    return false;
  }
};
