//@flow
/*eslint-disable*/
export const FORM_CHANGE_CREDIT_CARD_NUMBER = 'FORM_CHANGE_CREDIT_CARD_NUMBER';
export const FORM_CHANGE_CVV = 'FORM_CHANGE_CVV';
export const FORM_CHANGE_EXPIRATION_DATE = 'FORM_CHANGE_EXPIRATION_DATE';
export const FORM_CHANGE_FIRST_NAME = 'FORM_CHANGE_FIRST_NAME';
export const FORM_CHANGE_LAST_NAME = 'FORM_CHANGE_LAST_NAME';
export const FORM_CHANGE_SECRET_QUESTION = 'FORM_CHANGE_SECRET_QUESTION';
export const FORM_CHANGE_SECRET_ANSWER = 'FORM_CHANGE_SECRET_ANSWER';

export const setCreditCardNumber = (creditCardNumber: string) => ({
  type: FORM_CHANGE_CREDIT_CARD_NUMBER,
  payload: creditCardNumber,
});

export const setCVV = (cvv: string) => ({
  type: FORM_CHANGE_CVV,
  payload: cvv,
});

export const setExpirationDate = (expirationDate: string) => ({
  type: FORM_CHANGE_EXPIRATION_DATE,
  payload: expirationDate,
});

export const setFirstName = (firstName: string) => ({
  type: FORM_CHANGE_FIRST_NAME,
  payload: firstName,
});

export const setLastName = (lastName: string) => ({
  type: FORM_CHANGE_LAST_NAME,
  payload: lastName,
});

export const setSecretQuestion = (secretQuestion: string) => ({
  type: FORM_CHANGE_SECRET_QUESTION,
  payload: secretQuestion,
});

export const setSecretAnswer = (secretAnswer: string) => ({
  type: FORM_CHANGE_SECRET_ANSWER,
  payload: secretAnswer,
});
