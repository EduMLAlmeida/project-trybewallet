import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class WalletTable extends Component {
  render() {
    const {
      wallet,
    } = this.props;
    const {
      expenses,
    } = wallet;
    return (
      <table className="wallet-table">
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {
            expenses.map(
              (element, index) => {
                const valor = element.value;
                const taxa = element.exchangeRates[element.currency].ask;
                const valorBRL = valor * taxa;
                console.log(typeof (element.value));
                return (
                  <tr key={ index }>
                    <td>{ element.description }</td>
                    <td>{ element.tag }</td>
                    <td>{ element.method }</td>
                    <td>{ Number(element.value).toFixed(2) }</td>
                    <td>{ element.exchangeRates[element.currency].name }</td>
                    <td>
                      {
                        Number(element.exchangeRates[element.currency].ask).toFixed(2)
                      }
                    </td>
                    <td>{ Number(valorBRL).toFixed(2) }</td>
                    <td>Real</td>
                    <td>Editar/Excluir</td>
                  </tr>
                );
              },
            )
          }
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  wallet: state.wallet,
});

WalletTable.propTypes = {
  wallet: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps)(WalletTable);
