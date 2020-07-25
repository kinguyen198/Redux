import {
  INCREASEMENT,
  DECREASEMENT,
  WITHDRAW,
  DEPOSIT,
  INPUT_MONEY,
  AMOUNT_VALUE,
} from './constant';

export const counterIncrease = (counter) => ({
  type: INCREASEMENT,
  counter,
});
export const counterDecrease = (counter) => ({
  type: DECREASEMENT,
  counter,
});
export const withDraw = (money) => ({
  type: WITHDRAW,
  money,
});
export const deposit = (money) => ({
  type: DEPOSIT,
  money,
});
export const inputMoney = (text) => ({
  type: INPUT_MONEY,
  text,
});
export const amountValue = (value) => ({
  type: AMOUNT_VALUE,
  value,
});
