"use client";
import * as React from "react";
import { Connector, useConnect, useAccount, useBalance, useChainId } from "wagmi";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Loader2 } from "lucide-react";
import Image from "next/image";

// Wallet icons mapping - you might need to create/download these icons
const walletIcons: Record<string, string> = {
  "MetaMask": "/icons/metamask.svg",
  "WalletConnect": "/icons/walletconnect.svg",
  "Coinbase Wallet": "/icons/coinbase.svg",
  // Add more wallet icons as needed
};

// Default icon for wallets not in the mapping
const defaultWalletIcon = "/icons/wallet-generic.svg";

// Common chains data - add more as needed
const chainsData: Record<number, { name: string; iconUrl?: string }> = {
  1: { name: "Ethereum", iconUrl: "/icons/ethereum.svg" },
  137: { name: "Polygon", iconUrl: "/icons/polygon.svg" },
  8453: { name: "Base", iconUrl: "/icons/base.svg" },
  42161: { name: "Arbitrum", iconUrl: "/icons/arbitrum.svg" },
  10: { name: "Optimism", iconUrl: "/icons/optimism.svg" },
  // Add more chains as needed
};

export function WalletOptions() {
  const { connectors, connect } = useConnect();
  const { address, isConnected } = useAccount();
  const chainId = useChainId();
  const { data: balance } = useBalance({ address });
  const [open, setOpen] = React.useState(false);

  // Get current chain data
  const currentChain = chainId ? chainsData[chainId] : null;

  // Format address for display
  const formatAddress = (addr: `0x${string}` | undefined) => {
    if (!addr) return "";
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  }; 

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        {isConnected ? (
          <Button variant="outline" className="flex items-center gap-2">
            {currentChain && (
              <div className="flex items-center bg-muted px-2 py-1 rounded-md mr-2">
                {currentChain.iconUrl && (
                  <Image 
                    src={currentChain.iconUrl} 
                    alt={currentChain.name} 
                    width={16} 
                    height={16} 
                    className="mr-1" 
                  />
                )}
                <span className="text-xs font-medium">{currentChain.name}</span>
              </div>
            )}
            {balance && (
              <span className="hidden md:inline mr-2">
                {parseFloat(balance.formatted).toFixed(4)} {balance.symbol}
              </span>
            )}
            <span>{formatAddress(address)}</span>
          </Button>
        ) : (
          <Button variant="default">Connect Wallet</Button>
        )}
      </AlertDialogTrigger>
      <AlertDialogContent className="sm:max-w-[425px]">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-xl font-bold">Connect your wallet</AlertDialogTitle>
          <AlertDialogDescription className="text-muted-foreground">
            Choose your preferred wallet to connect to our dApp. Make sure you
            have the wallet installed and set up.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="flex flex-col gap-4 py-4">
          {connectors.map((connector) => (
            <WalletOption
              key={connector.uid}
              connector={connector}
              onClick={() => {
                connect({ connector });
                setOpen(false);
              }}
            />
          ))}
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel className="w-full sm:w-auto">Cancel</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

const WalletOption = ({
  connector,
  onClick,
}: {
  connector: Connector;
  onClick: () => void;
}) => {
  const [ready, setReady] = React.useState(false);
  const [checking, setChecking] = React.useState(true);

  React.useEffect(() => {
    (async () => {
      try {
        setChecking(true);
        const provider = await connector.getProvider();
        setReady(!!provider);
      } catch (error) {
        setReady(false);
      } finally {
        setChecking(false);
      }
    })();
  }, [connector]);

  // Get the appropriate icon for this wallet
  const iconSrc = walletIcons[connector.name] || defaultWalletIcon;

  return (
    <Button
      variant="outline"
      className="justify-start h-14 gap-3 w-full hover:bg-muted/60 transition-colors"
      disabled={!ready || checking}
      onClick={onClick}
    >
      {checking ? (
        <Loader2 className="h-5 w-5 animate-spin" />
      ) : (
        <div className="h-6 w-6 relative">
          <Image 
            src={iconSrc} 
            alt={connector.name} 
            fill 
            className="object-contain"
            onError={(e) => {
              // Fallback if image fails to load
              e.currentTarget.src = defaultWalletIcon;
            }}
          />
        </div>
      )}
      <div className="flex flex-col items-start">
        <span className="font-medium">{connector.name}</span>
        <span className="text-xs text-muted-foreground">
          {!ready && !checking ? "Not installed" : ""}
        </span>
      </div>
    </Button>
  );
};