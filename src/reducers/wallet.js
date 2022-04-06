// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const WALLET_INITIAL_STATE = {
  currencies: [],
  expenses: [],
  expenseId: 0,
};

const wallet = (state = WALLET_INITIAL_STATE, action) => {
  switch (action.type) {
  case 'RECEIVE_CURRENCIES_SUCCESS':
    return {
      ...state,
      currencies: action.currencies,
    };
  case 'RECEIVE_CURRENCIES_FAILURE':
    return {
      ...state,
      currenciesError: action.error,
    };
  case 'RECEIVE_EXCHANGE_FAILURE':
    return {
      ...state,
      exchangeError: action.error,
    };
  case 'SAVE_EXPENSE':
    return {
      ...state,
      expenses: action.state,
    };
  case 'SAVE_EXPENSE_ID':
    return {
      ...state,
      expenseId: action.expenseId,
    };
  default:
    return state;
  }
};

export default wallet;
