import {onValidation} from './validationService';

const callServerMock = () => {
  return new Promise(resolve => {
    const val = onValidation();
    setTimeout(() => resolve(val), 5000);
  });
};

const onServerValidation = () => {
  return callServerMock();
};

class serverService {
  callServerValidation() {
    return onServerValidation();
  }
}

export {serverService};
