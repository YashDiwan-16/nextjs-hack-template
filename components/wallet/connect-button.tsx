"use client";
import { useAccount, useDisconnect } from "wagmi";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useConnectModal } from "@rainbow-me/rainbowkit";

export const WagmiWalletButton = () => {
  const { isConnected, address } = useAccount();
  const { disconnect } = useDisconnect();
  const [mounted, setMounted] = useState(false);
  const { openConnectModal } = useConnectModal();
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const formatAddress = (addr: string) => {
    if (!addr) return "";
    return `${addr.slice(0, 4)}...${addr.slice(-4)}`;
  };

  const copyAddress = () => {
    if (address) {
      navigator.clipboard.writeText(address);
      toast.success(
        `Copied ${formatAddress(address)} to clipboard`,
        { duration: 2000 }
      );
    }
  };

  const handleConnect = () => {
    if (openConnectModal) {
      // Small timeout to ensure any state updates complete first
      setTimeout(() => {
        openConnectModal();
      }, 50);
    }
  };

  // Don't render anything until mounted to prevent hydration errors
  if (!mounted) return null;

  if (isConnected && address) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="flex items-center">
            {formatAddress(address)}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={copyAddress}>
            Copy Address
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => disconnect()}>
            Disconnect
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  // Choose between custom WalletOptions or RainbowKit modal
  if (openConnectModal) {
    return <Button variant="default" onClick={handleConnect}>Connect</Button>;
  }
  
  return <Button variant="default">Connect</Button>;
};

export default WagmiWalletButton;