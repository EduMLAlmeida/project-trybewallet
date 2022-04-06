import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { saveExpense, saveExpenseId, fetchExchange } from '../actions/index';

class WalletForm extends Component {
  onAddButtonClick = async () => {
    const {
      saveExpenseState,
      saveExpenseIdState,
      fetchExchangeRates,
      wallet,
    } = this.props;
    const value = document.getElementById('value-input');
    const currency = document.getElementById('currency-input');
    const method = document.getElementById('method-input');
    const tag = document.getElementById('tag');
    const description = document.getElementById('description');
    const expensesArray = wallet.expenses;
    let newId = wallet.expenseId;
    const exchangeRates = await fetchExchangeRates();
    const expense = {
      id: newId,
      value: value.value,
      description: description.value,
      currency: currency.value,
      method: method.value,
      tag: tag.value,
      exchangeRates,
    };
    expensesArray.push(expense);
    saveExpenseState(expensesArray);
    newId += 1;
    saveExpenseIdState(newId);
    value.value = null;
  }

  render() {
    const {
      wallet,
    } = this.props;
    return (
      <form className="wallet-form">
        <label htmlFor="value-input">
          Valor:
          <input
            type="number"
            name="value-input"
            id="value-input"
            data-testid="value-input"
          />
        </label>
        <label htmlFor="currency-input">
          Moeda:
          <select name="currency-input" id="currency-input" data-testid="currency-input">
            {wallet.currencies.map(
              (element, index) => <option key={ index }>{ element }</option>,
            )}
          </select>
        </label>
        <label htmlFor="method-input">
          Método de pagamento:
          <select name="method-input" id="method-input" data-testid="method-input">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Categoria:
          <select name="tag" id="tag" data-testid="tag-input">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
        <label htmlFor="description">
          Descrição:
          <input
            type="text"
            name="description"
            id="description"
            data-testid="description-input"
          />
        </label>
        <button type="button" onClick={ this.onAddButtonClick }>Adicionar despesa</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  wallet: state.wallet,
});

const mapDispatchToProps = (dispatch) => ({
  saveExpenseState: (expense) => dispatch(saveExpense(expense)),
  saveExpenseIdState: (expenseId) => dispatch(saveExpenseId(expenseId)),
  fetchExchangeRates: () => dispatch(fetchExchange()),
});

WalletForm.propTypes = {
  wallet: PropTypes.objectOf(PropTypes.any).isRequired,
  saveExpenseState: PropTypes.func.isRequired,
  saveExpenseIdState: PropTypes.func.isRequired,
  fetchExchangeRates: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
