import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class WalletHeader extends Component {
  render() {
    const { user } = this.props;
    return (
      <header className="wallet-header">
        <span data-testid="email-field">
          Email:
          {' '}
          {user.email}
        </span>
        <span data-testid="total-field">Despesa Total: R$0,00</span>
        <span data-testid="header-currency-field">BRL</span>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

WalletHeader.propTypes = {
  user: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps, null)(WalletHeader);
