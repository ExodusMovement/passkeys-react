import React from 'react';
import logo from './logo.svg';
import './App.css';
import { createWallet } from '@passkeys/core';
import { WalletProvider, WalletWidget } from '@passkeys/react';

const wallet = createWallet({
  appId: '12345678-abcd-efgh-ijkl-mnopqrstuvwx',
  providers: {    solana: true  }
});

const connectWallet = () => {  wallet.providers.solana.connect();};

function App() {
  return (
    <WalletProvider wallet={wallet}>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={connectWallet}>Connect</button>
        <WalletWidget/>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          >
          Learn React
        </a>
      </header>
    </div>
    </WalletProvider>
  );
}

export default App;