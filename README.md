# Passkeys React App

Get started with Passkeys in just 8 lines of code

```bash
yarn create react-app passkeys-react --template typescript
```

```bash
yarn add @passkeys/core @passkeys/react
```

***Generate a random UUID***
Example : 12345678-abcd-efgh-ijkl-mnopqrstuvwx
For production request one here [hello@passkeys.foundation]

Import

```react file=index.tsx
import { createWallet } from '@passkeys/core';
import { WalletProvider } from '@passkeys/react';
```

Create wallet

```react file=index.tsx
const wallet = createWallet({
  appId: '<insert UUID here>',
  providers: {
    solana: true
  }
})
```

Connect button

```react
const connectWallet = () => {  wallet.providers.solana.connect();};
```

Display wallet

```react
<WalletProvider>
<WalletWidget />
</WalletProvider>
```
