const cardRegex = RegExp(/^[0-9]{16}$/);
const cvvRegex = RegExp(/^[0-9]{3,4}$/);
const expRegex = RegExp(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/);
const firstNameRegex = RegExp(/^[A-z]{2,10}$/);
const lastNameRegex = RegExp(/^[A-z]{2,10}$/);
const secretQuestionRegex = RegExp(/^[a-z]{10,20}$/);
const secretAnswerRegex = RegExp(/^[a-z]{10,20}$/);

const callServerMock = input => {
  return new Promise(resolve => {
    setTimeout(() => resolve(onValidation(input)), 2000);
  });
};

onValidation = input => {
  let formErrors = {...input.formErrors};
  switch (input.formErrors) {
    case 'firstName':
      formErrors.firstName = firstNameRegex.test(value) ? true : false;
      break;
    case 'lastName':
      formErrors.lastName = lastNameRegex.test(value) ? true : false;
      break;
    case 'secretQuestion':
      formErrors.secretQuestion = secretQuestionRegex.test(value)
        ? true
        : false;
      break;
    case 'secretAnswer':
      formErrors.secretAnswer = secretAnswerRegex.test(value) ? true : false;
      break;
    case 'creditCardNumber':
      formErrors.creditCardNumber = cardRegex.test(value) ? true : false;
      break;
    case 'cvv':
      formErrors.cvv = cvvRegex.test(value) ? true : false;
      break;
    case 'expirationDate':
      formErrors.expirationDate = expRegex.test(value) ? true : false;
      break;
    default:
      break;
  }

  return formErrors;
};
const onServerValidation = input => callServerMock(input);

export default onServerValidation;
