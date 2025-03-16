'use client';
import { useState, useEffect } from 'react';
import { useConnectModal } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';

export function RainbowWalletModal() {
  const { isConnected } = useAccount();
  const { openConnectModal } = useConnectModal();
  const [showModal, setShowModal] = useState(false);
  const [userDismissed, setUserDismissed] = useState(false);

  // Show modal when user is not connected and hasn't dismissed it
  useEffect(() => {
    if (!isConnected && !userDismissed) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  }, [isConnected, userDismissed]);

  // Reset user dismissed state when connection status changes
  useEffect(() => {
    if (isConnected) {
      setUserDismissed(false);
    }
  }, [isConnected]);

  const handleConnectWallet = () => {
    if (openConnectModal) {
      openConnectModal();
    }
  };

  const handleDismiss = () => {
    setUserDismissed(true);
    setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ease-in-out"
            onClick={handleDismiss}
            aria-hidden="true"
          />
          
          {/* Modal */}
          <div
            className="fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white p-6 shadow-2xl dark:bg-gray-900 sm:p-8 transition-all duration-300 ease-in-out"
            role="dialog"
            aria-modal="true"
            aria-labelledby="wallet-modal-title"
          >
            {/* Close button */}
            <button
              onClick={handleDismiss}
              className="absolute right-4 top-4 rounded-full p-1 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-50"
              aria-label="Close modal"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="18" 
                height="18" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            
            {/* Content */}
            <div className="text-center">
              <h2 
                id="wallet-modal-title"
                className="mb-2 text-xl font-bold text-gray-900 dark:text-white sm:text-2xl"
              >
                Connect Your Wallet
              </h2>
              <p className="mb-6 text-gray-600 dark:text-gray-400">
                Connect your wallet to access all features of this application
              </p>
              
              <div className="space-y-4">
                <button
                  onClick={handleConnectWallet}
                  className="inline-flex w-full items-center justify-center rounded-lg bg-blue-600 px-5 py-3 text-center text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800 transition-colors"
                >
                  Connect Wallet
                </button>
                <button
                  onClick={handleDismiss}
                  className="inline-flex w-full items-center justify-center rounded-lg border border-gray-300 bg-white px-5 py-3 text-center text-base font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700 transition-colors"
                >
                  Continue Without Connecting
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