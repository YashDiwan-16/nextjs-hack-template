'use client';
import { useState, useEffect } from 'react';
import { useConnectModal } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';

export function RainbowWalletModal() {
  const { isConnected } = useAccount();
  const { openConnectModal } = useConnectModal();
  const [showModal, setShowModal] = useState(false);

  // Show modal when user is not connected
  useEffect(() => {
    if (!isConnected) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  }, [isConnected]);

  const handleConnectWallet = () => {
    if (openConnectModal) {
      openConnectModal();
    }
  };

  return (
    <>
      {showModal && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ease-in-out"
            aria-hidden="true"
          />
          
          {/* Modal */}
          <div
            className="fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white p-6 shadow-2xl dark:bg-gray-900 sm:p-8 transition-all duration-300 ease-in-out"
            role="dialog"
            aria-modal="true"
            aria-labelledby="wallet-modal-title"
          >
            {/* Content */}
            <div className="text-center">
              <h2 
                id="wallet-modal-title"
                className="mb-2 text-xl font-bold text-gray-900 dark:text-white sm:text-2xl"
              >
                Connect Your Wallet
              </h2>
              <p className="mb-6 text-gray-600 dark:text-gray-400">
                Please connect your wallet to access this application
              </p>
              
              <div className="space-y-4">
                <button
                  onClick={handleConnectWallet}
                  className="inline-flex w-full items-center justify-center rounded-lg bg-blue-600 px-5 py-3 text-center text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800 transition-colors"
                >
                  Connect Wallet
                </button>
              </div>
              
              <p className="mt-4 text-xs text-gray-500 dark:text-gray-400">
                By connecting your wallet, you agree to our Terms of Service and Privacy Policy
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
} 