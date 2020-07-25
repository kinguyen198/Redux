import {
  INCREASEMENT,
  DECREASEMENT,
  WITHDRAW,
  DEPOSIT,
  INPUT_MONEY,
  AMOUNT_VALUE,
} from '../actions/constant';
import {combineReducers} from 'redux';
// const initialState = {
//   counter: 0,
//   amount: 0,
//   money: 0,
// };
const reCounter = (state = 0, action) => {
  switch (action.type) {
    case INCREASEMENT:
      return {
        ...state,
        counter: action.counter + 1,
      };
    case DECREASEMENT:
      return {
        ...state,
        counter: action.counter - 1,
      };
    default:
      return state;
  }
};
const reAmount = (state = 0, action) => {
  switch (action.type) {
    case WITHDRAW:
      return {
        ...state,
        amount: state.amount - action.money,
      };
    case DEPOSIT:
      return {
        ...state,
        amount: state.amount + action.money,
      };
    case AMOUNT_VALUE:
      return {
        ...state,
        amount: action.value,
      };
    default:
      return state;
  }
};
const reInputMoney = (state = 0, action) => {
  switch (action.type) {
    case INPUT_MONEY:
      return {
        ...state,
        money: action.text,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  reCounter,
  reAmount,
  reInputMoney,
});
export default rootReducer;
