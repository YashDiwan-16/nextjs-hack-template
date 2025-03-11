'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { ReactNode } from 'react'
import { WagmiProvider } from 'wagmi'
import { cookieToInitialState } from 'wagmi'
import { RainbowKitProvider } from '@rainbow-me/rainbowkit'

import { config } from './config'

type Props = {
  children: ReactNode,
  cookie: string | null
}

const queryClient = new QueryClient()

export function Providers({ children, cookie }: Props) {
  const initialState = cookieToInitialState(
    config, 
    cookie
  )

  return (
    <WagmiProvider config={config} initialState={initialState}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}