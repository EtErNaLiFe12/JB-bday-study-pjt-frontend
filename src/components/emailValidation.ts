
export const emailValidation = ( email: string ) => {

  const regExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  return regExp.test(email);

}
