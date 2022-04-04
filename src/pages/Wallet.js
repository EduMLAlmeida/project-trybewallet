import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import WalletHeader from '../components/WalletHeader';
import WalletForm from '../components/WalletForm';
import WalletTable from '../components/WalletTable';
import './Wallet.css';
import { fetchCurrencies } from '../actions/index';

class Wallet extends React.Component {
  componentDidMount() {
    const {
      fetchWalletCurrencies,
    } = this.props;
    fetchWalletCurrencies();
  }

  render() {
    return (
      <div className="wallet-page">
        <WalletHeader />
        <WalletForm />
        <WalletTable />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchWalletCurrencies: () => dispatch(fetchCurrencies()),
});

Wallet.propTypes = {
  fetchWalletCurrencies: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Wallet);
