// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const WALLET_INITIAL_STATE = {
  currencies: [],
  expenses: [],
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
      error: action.error,
    };
  default:
    return state;
  }
};

export default wallet;
