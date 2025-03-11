import '@rainbow-me/rainbowkit/styles.css';
// import { createConfig, WagmiProvider, cookieStorage, createStorage, unstable_connector } from 'wagmi';
import {  cookieStorage, createStorage } from 'wagmi';

import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
//   zora,
//   sepolia,
  bsc,
} from 'wagmi/chains';
// import { createClient, fallback, http } from 'viem';
// import { injected } from 'wagmi/connectors';
import { 
  metaMaskWallet,
  binanceWallet,
  okxWallet,
  tokenPocketWallet,
  coinbaseWallet,
  walletConnectWallet,
  imTokenWallet,
  trustWallet,
  bitgetWallet,
  rainbowWallet, 
} from '@rainbow-me/rainbowkit/wallets';
import { getDefaultConfig } from '@rainbow-me/rainbowkit';

export const config = getDefaultConfig({
  appName: 'Demo',
  projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID ?? '',
  chains: [mainnet, arbitrum, base, bsc, optimism, polygon],
  wallets: [
    {
      groupName: 'Popular',
      wallets: [
        metaMaskWallet,
        binanceWallet,
        okxWallet,
        tokenPocketWallet,
        coinbaseWallet,
        walletConnectWallet,
        imTokenWallet,
        trustWallet,
        bitgetWallet,
        rainbowWallet,
      ]
    }
  ],
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
  // multiInjectedProviderDiscovery: false,
  // Warning: Make sure the transports configuration matches the enabled chains
  // transports: {
  //   [mainnet.id]: fallback([
  //     unstable_connector(injected),
  //     http()
  //   ]),
  //   [sepolia.id]: http(),
  // },
})

// export const config = createConfig({
//   chains: [mainnet, sepolia],
//   ssr: true, // https://wagmi.sh/react/guides/ssr
//   storage: createStorage({  
//     storage: cookieStorage, 
//   }),
//   connectors: [injected()],  // https://wagmi.sh/react/api/transports/unstable_connector
//   transports: {
//     [mainnet.id]: fallback([
//       unstable_connector(injected),
//       // http('https://eth-mainnet.g.alchemy.com/v2/...'),
//       http()
//     ]),
//     [sepolia.id]: http(),
//   },
//   // client({ chain }) {
//   //   return createClient({ chain, transport: http() })
//   // }
// })