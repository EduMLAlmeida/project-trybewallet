import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class WalletHeader extends Component {
  render() {
    const {
      user,
      wallet,
    } = this.props;
    let totalExpenses = 0;
    const { expenses } = wallet;
    expenses.forEach((element) => {
      const valor = element.value;
      const moeda = element.currency;
      const taxa = element.exchangeRates[moeda].ask;
      const valorBRL = valor * taxa;
      totalExpenses += valorBRL;
    });
    return (
      <header className="wallet-header">
        <span data-testid="email-field">
          Email:
          {' '}
          {user.email}
        </span>
        <span data-testid="total-field">{totalExpenses.toFixed(2)}</span>
        <span data-testid="header-currency-field">BRL</span>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  wallet: state.wallet,
});

WalletHeader.propTypes = {
  user: PropTypes.objectOf(PropTypes.any).isRequired,
  wallet: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps, null)(WalletHeader);
