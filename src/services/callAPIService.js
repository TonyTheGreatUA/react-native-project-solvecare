import { validationService } from './validationService';

const callServerMock = items => {
  return new Promise((resolve, reject) => {
    const err = validationService(items);
    const response = () => {
      err ? reject(err) : resolve();
    };
    setTimeout(response, 5000);
  });
};

const onServerValidation = items => {
  return callServerMock(items);
};

class callAPIService {
  callServerValidation(items) {
    return onServerValidation(items);
  }
}

export { callAPIService };
