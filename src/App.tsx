import React from 'react';
import logo from './logo.svg';
import './App.css';
import { createWallet } from '@passkeys/core';
import { WalletProvider, WalletWidget } from '@passkeys/react';

const wallet = createWallet({
  appId: '3ed47d37-67d4-429b-9f2d-e6082d1cd347',
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
