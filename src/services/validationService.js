//@flow
import { RegExps } from '../utils/RegExps';

function assertErr(exp: boolean, msg: string, err: Array<string>) {
  if (!exp) {
    err.push(msg);
  }
}

export const validationService = (items: any) => {
  const {
    creditCardNumber,
    cvv,
    expirationDate,
    firstName,
    lastName,
    secretQuestion,
    secretAnswer,
  } = items;
  const err = [];

  assertErr(creditCardNumber.match(RegExps.creditCardRegex), 'Credit Card Number is invalid!', err);
  assertErr(cvv.match(RegExps.cvvRegex), 'CVV is invalid!', err);
  assertErr(expirationDate.match(RegExps.expRegex), 'Expiration Date is invalid!', err);
  assertErr(firstName.match(RegExps.firstNameRegex), 'First Name is invalid!', err);
  assertErr(lastName.match(RegExps.lastNameRegex), 'Last Name is invalid!', err);
  assertErr(secretQuestion.match(RegExps.secretQuestionRegex), 'Secret Question is invalid!', err);
  assertErr(secretAnswer.match(RegExps.secretAnswerRegex), 'Secret Answer is invalid!', err);

  return err[0];
};
