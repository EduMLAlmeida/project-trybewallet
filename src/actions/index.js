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
      const treatedCurreciesCodes = [];
      allCurrenciesCodes.forEach((element) => {
        if (element !== 'USDT') {
          treatedCurreciesCodes.push(element);
        }
      });
      dispatch(receiveCurrenciesSuccess(treatedCurreciesCodes));
    } catch (error) {
      dispatch(receiveCurrenciesFailure(error));
    }
  };
}
