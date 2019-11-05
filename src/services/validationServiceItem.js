//@flow
import { RegExps } from '../utils/RegExps';

function assertErr(exp: boolean, msg: string, err: Array<string>) {
  if (!exp) {
    err.push(msg);
  }
}

export const validationServiceItem = (items: any) => {
  const { title, weight, size } = items;
  const err = [];

  assertErr(title.match(RegExps.titleRegex), 'Title is invalid!', err);
  assertErr(weight.match(RegExps.weightRegex), 'Weight is invalid!', err);
  assertErr(size.match(RegExps.sizeRegex), 'Size is invalid!', err);

  return err[0];
};
