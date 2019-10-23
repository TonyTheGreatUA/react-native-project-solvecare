export const RegExps = {
  creditCardRegex: RegExp(/^[0-9]{16}$/),
  cvvRegex: RegExp(/^[0-9]{3,4}$/),
  expRegex: RegExp(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/),
  firstNameRegex: RegExp(/^[A-z]{2,10}$/),
  lastNameRegex: RegExp(/^[A-z]{2,10}$/),
  secretQuestionRegex: RegExp(/^[A-z]{2,10}$/),
  secretAnswerRegex: RegExp(/^[A-z]{2,10}$/),
};
