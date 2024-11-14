import React, {  StrictMode, ReactNode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createAppKit } from '@reown/appkit/react'
import { WagmiProvider } from 'wagmi'
import { optimism, mainnet } from '@reown/appkit/networks'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'


const queryClient = new QueryClient()

const projectId = import.meta.env.VITE_APPKIT_PROJECT_ID


const metadata = {
  name: 'connectme',
  description: 'Connect with me',
  url: 'https://innkeeping.github.io',
  icons: ['/profilepic.png']
}


const networks = [mainnet, optimism,]


const wagmiAdapter = new WagmiAdapter({
  networks,
  projectId,
  ssr: true
});


createAppKit({
  adapters: [wagmiAdapter],
  networks: [mainnet, optimism],
  metadata,
  projectId,
  showWallets: true,
  features: {
    analytics: true,
    email: false,
    socials: ['x', 'farcaster', 'discord'],
  }
})

const AppKitProvider = ({ children }: { children: ReactNode }) => (
  <WagmiProvider config={wagmiAdapter.wagmiConfig}>
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  </WagmiProvider>
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppKitProvider>
      <App />
    </AppKitProvider>
  </StrictMode>,
)

export default AppKitProvider