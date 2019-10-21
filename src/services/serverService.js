import {onValidation} from './validationService';

const callServerMock = input => {
  return new Promise(resolve => {
    setTimeout(() => resolve(onValidation(input)), 2000);
  });
};

const onServerValidation = input => callServerMock(input);

export default onServerValidation;
