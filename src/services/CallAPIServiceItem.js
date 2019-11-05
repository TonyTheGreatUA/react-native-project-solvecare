//@flow
import { validationService } from './validationService';

const callServerMockItem = (items: boolean): Promise<any> => {
  return new Promise((resolve, reject) => {
    const err = validationService(items);
    const response = () => {
      err ? reject(err) : resolve();
    };
    setTimeout(response, 1000);
  });
};

const onServerValidationItem = (items: boolean) => {
  return callServerMockItem(items);
};

class CallAPIServiceItem {
  callServerValidationItem(items: boolean) {
    return onServerValidationItem(items);
  }
}

export { CallAPIServiceItem };
