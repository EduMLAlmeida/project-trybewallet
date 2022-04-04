import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class WalletForm extends Component {
  render() {
    const {
      wallet,
    } = this.props;
    return (
      <form className="wallet-form">
        <label htmlFor="value-input">
          Valor:
          <input type="number" name="value-input" data-testid="value-input" />
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
          <select name="method-input" data-testid="method-input">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Categoria:
          <select name="tag" data-testid="tag-input">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
        <label htmlFor="description">
          Descrição:
          <input type="text" name="description" data-testid="description-input" />
        </label>
        <button type="button">Adicionar despesa</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  wallet: state.wallet,
});

WalletForm.propTypes = {
  wallet: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps, null)(WalletForm);
