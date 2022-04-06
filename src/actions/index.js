// Coloque aqui suas actions
import getCurrencies from '../services/API';

export const saveUser = (state) => ({
  type: 'SAVE_USER',
  state,
});

export const receiveCurrenciesSuccess = (currencies) => ({
  type: 'RECEIVE_CURRENCIES_SUCCESS',
  currencies,
});

export const receiveCurrenciesFailure = (error) => ({
  type: 'RECEIVE_CURRENCIES_FAILURE',
  error,
});

export function fetchCurrencies() {
  return async (dispatch) => {
    try {
      const currencies = await getCurrencies();
      const allCurrenciesCodes = Object.keys(currencies);
      const treatedCurrenciesCodes = [];
      allCurrenciesCodes.forEach((element) => {
        if (element !== 'USDT') {
          treatedCurrenciesCodes.push(element);
        }
      });
      dispatch(receiveCurrenciesSuccess(treatedCurrenciesCodes));
    } catch (error) {
      dispatch(receiveCurrenciesFailure(error));
    }
  };
}

export const receiveExchangeFailure = (error) => ({
  type: 'RECEIVE_EXCHANGE_FAILURE',
  error,
});

export function fetchExchange() {
  return async (dispatch) => {
    try {
      const exchange = await getCurrencies();
      return exchange;
    } catch (error) {
      dispatch(receiveExchangeFailure(error));
    }
  };
}

export const saveExpense = (state) => ({
  type: 'SAVE_EXPENSE',
  state,
});

export const saveExpenseId = (expenseId) => ({
  type: 'SAVE_EXPENSE_ID',
  expenseId,
});
