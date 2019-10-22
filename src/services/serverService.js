import {onValidation} from './validationService';

const callServerMock = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve(onValidation()), 5000);
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
