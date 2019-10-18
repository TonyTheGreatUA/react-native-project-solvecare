const cardRegex = RegExp(/^[0-9]{16}$/);
const cvvRegex = RegExp(/^[0-9]{3,4}$/);
const expRegex = RegExp(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/);

const serverMock = input => {
  return newPromise(resolve => {
    setTimeout(() => resolve(onValidtion(input)), 5000);
  });
};

onValidation = input => {
  let formErrors = {...this.state.formErrors};

  switch (name) {
    case 'firstName':
      formErrors.firstName = value.length < 3 ? false : true;
      break;
    case 'lastName':
      formErrors.lastName = value.length < 3 ? false : true;
      break;
    case 'secretQuestion':
      formErrors.secretQuestion = value.length < 10 ? false : true;
      break;
    case 'secretAnswer':
      formErrors.secretAnswer = value.length < 10 ? false : true;
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
  this.setState({formErrors, [name]: value});
};
