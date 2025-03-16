'use client';

import { useEffect, useState } from 'react';
import { RainbowWalletModal } from '@/components/wallet/rainbow-wallet-modal';
import { useAccount } from 'wagmi';
import { Button } from '@/components/ui/button';
import { useDisconnect } from 'wagmi';
import { useConnectModal } from '@rainbow-me/rainbowkit';

export default function WalletDemoPage() {
  const { isConnected, address } = useAccount();
  const { disconnect } = useDisconnect();
  const { openConnectModal } = useConnectModal();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration errors by only rendering client-side
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleConnectClick = () => {
    if (openConnectModal) {
      setTimeout(() => {
        openConnectModal();
      }, 50);
    }
  };

  if (!mounted) return null;

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Wallet Connection Demo</h1>
        
        <div className="bg-card p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-semibold mb-4">Connection Status</h2>
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Connection Status:</p>
                <p className="font-medium">
                  {isConnected 
                    ? <span className="text-green-500">Connected</span> 
                    : <span className="text-red-500">Not Connected</span>}
                </p>
              </div>
              
              {isConnected && address && (
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Wallet Address:</p>
                  <p className="font-medium break-all">{address}</p>
                </div>
              )}
            </div>
            
            {!isConnected && openConnectModal && (
              <Button 
                variant="default"
                onClick={handleConnectClick}
                className="w-full md:w-auto"
              >
                Connect Directly
              </Button>
            )}
            
            {isConnected && (
              <Button 
                variant="destructive" 
                onClick={() => disconnect()}
                className="w-full md:w-auto"
              >
                Disconnect Wallet
              </Button>
            )}
          </div>
        </div>
        
        <div className="bg-card p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Protected Content</h2>
          {isConnected ? (
            <div>
              <p className="mb-4">
                This content is only visible to connected wallets. You now have full access to the application.
              </p>
              <p className="text-muted-foreground">
                In a real application, this section would contain wallet-specific functionality, transaction history, 
                or other authenticated features.
              </p>
            </div>
          ) : (
            <p className="text-muted-foreground">
              Please connect your wallet to view this protected content.
            </p>
          )}
        </div>
      </div>
      
      {/* The RainbowWalletModal will automatically show when not connected */}
      <RainbowWalletModal />
    </main>
  );
} 