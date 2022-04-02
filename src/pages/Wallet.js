import React from 'react';
import WalletHeader from '../components/WalletHeader';
import WalletForm from '../components/WalletForm';
import WalletTable from '../components/WalletTable';
import './Wallet.css';

class Wallet extends React.Component {
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

export default Wallet;
