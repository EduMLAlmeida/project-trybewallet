const currenciesURL = 'https://economia.awesomeapi.com.br/json/all';

const getCurrencies = async () => {
  const response = await fetch(currenciesURL);
  const json = await response.json();
  return response.ok
    ? Promise.resolve(json)
    : Promise.reject(json);
};

export default getCurrencies;
