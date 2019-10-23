import { onValidation } from './onValidation';

const callServerMock = items => {
  return new Promise((resolve, reject) => {
    const err = onValidation(items);
    const response = () => {
      err ? reject(err) : resolve();
    };
    setTimeout(response, 5000);
  });
};

const onServerValidation = items => {
  return callServerMock(items);
};

class serverService {
  callServerValidation(items) {
    return onServerValidation(items);
  }
}

export { serverService };
