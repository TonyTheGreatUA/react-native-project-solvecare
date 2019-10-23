//@flow
const cardRegex = RegExp(/^[0-9]{16}$/);
const cvvRegex = RegExp(/^[0-9]{3,4}$/);
const expRegex = RegExp(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/);
const firstNameRegex = RegExp(/^[A-z]{2,10}$/);
const lastNameRegex = RegExp(/^[A-z]{2,10}$/);
const secretQuestionRegex = RegExp(/^[A-z]{10,20}$/);
const secretAnswerRegex = RegExp(/^[A-z]{10,20}$/);

function assert(expression: string, message: string, errors: Array<string>) {
  if (!expression) {
    errors.push(message);
  }
}

export const onValidation = (items: Object) => {
  const err = [];
  const {
    creditCardNumber,
    cvv,
    expirationDate,
    firstName,
    lastName,
    secretQuestion,
    secretAnswer,
  } = items;

  assert(creditCardNumber.match(cardRegex), 'Credit Card Number is invalid!', err);
  assert(cvv.match(cvvRegex), 'CVV is invalid!', err);
  assert(expirationDate.match(expRegex), 'Expiration Date is invalid!', err);
  assert(firstName.match(firstNameRegex), 'First Name is invalid!', err);
  assert(lastName.match(lastNameRegex), 'Last Name is invalid!', err);
  assert(secretQuestion.match(secretQuestionRegex), 'Secret Question is invalid!', err);
  assert(secretAnswer.match(secretAnswerRegex), 'Secret Answer is invalid!', err);

  return err[0];
};
