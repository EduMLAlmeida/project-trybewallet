import React, { Component } from 'react';

class WalletForm extends Component {
  render() {
    return (
      <form className="wallet-form">
        <lable htmlFor="value">
          Valor:
          <input type="number" name="value" data-testid="value-input" />
        </lable>
        <lable htmlFor="currencies">
          Moeda:
          <select name="currencies">
            <option>BRL</option>
            <option>USD</option>
          </select>
        </lable>
        <lable htmlFor="method">
          Método de pagamento:
          <select name="metohd">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </lable>
        <lable htmlFor="category">
          Categoria:
          <select name="category">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </lable>
        <lable htmlFor="description">
          Descrição:
          <input type="text" name="description" data-testid="description-input" />
        </lable>
        <button type="button">Adicionar despesa</button>
      </form>
    );
  }
}

export default WalletForm;
