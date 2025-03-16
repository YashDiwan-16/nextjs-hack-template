'use client';
import { useState, useEffect } from 'react';
import { useConnectModal } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';

export function RainbowWalletModal() {
  const { isConnected } = useAccount();
  const { openConnectModal } = useConnectModal();
  const [showModal, setShowModal] = useState(false);
  const [animating, setAnimating] = useState(false);

  // Show modal when user is not connected
  useEffect(() => {
    if (!isConnected) {
      setShowModal(true);
      // Start animation after modal appears
      setTimeout(() => setAnimating(true), 50);
    } else {
      setAnimating(false);
      // Only hide modal after animation completes
      const timer = setTimeout(() => setShowModal(false), 300);
      return () => clearTimeout(timer);
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
          {/* Backdrop with animated gradient */}
          <div
            className={`fixed inset-0 bg-gradient-to-br from-black/70 to-indigo-900/50 backdrop-blur-md z-40 transition-opacity duration-500 ease-in-out ${
              animating ? 'opacity-100' : 'opacity-0'
            }`}
            aria-hidden="true"
          />
          
          {/* Modal */}
          <div
            className={`fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-out 
              ${animating ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
            role="dialog"
            aria-modal="true"
            aria-labelledby="wallet-modal-title"
          >
            {/* Card with glowing gradient border */}
            <div className="p-[2px] rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-lg shadow-purple-500/30 overflow-hidden animate-pulse-slow">
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 overflow-hidden">
                {/* Background decorative elements */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                  <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-b from-blue-400/10 to-transparent rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />
                  <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-t from-purple-400/10 to-transparent rounded-full translate-y-1/2 -translate-x-1/3 blur-3xl" />
                </div>
                
                {/* Content */}
                <div className="relative text-center">
                  {/* Wallet icon with glow effect */}
                  <div className="mb-6 mx-auto w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg shadow-purple-500/30">
                    <div className="text-white text-3xl">
                      💼
                    </div>
                  </div>
                  
                  <h2 
                    id="wallet-modal-title"
                    className="mb-3 text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400"
                  >
                    Connect Your Wallet
                  </h2>
                  <p className="mb-8 text-gray-600 dark:text-gray-300 text-lg">
                    Please connect your wallet to access this application
                  </p>
                  
                  <div className="space-y-6">
                    <button
                      onClick={handleConnectWallet}
                      className="inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-6 py-4 text-center text-lg font-medium text-white shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-purple-500/30 focus:outline-none focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-800 transition-all duration-300 transform hover:-translate-y-[2px]"
                    >
                      <span className="mr-2">Connect Wallet</span>
                      <span className="text-xl">→</span>
                    </button>
                  </div>
                  
                  {/* Wallet provider logos */}
                  <div className="mt-8 p-4 bg-gray-50 dark:bg-gray-700/30 rounded-xl">
                    <p className="mb-3 text-sm font-medium text-gray-500 dark:text-gray-400">
                      Supported Wallets
                    </p>
                    <div className="flex items-center justify-center space-x-4">
                      {/* MetaMask */}
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 mb-2 bg-[#F6851B] rounded-full flex items-center justify-center p-2 shadow-md">
                          <div className="text-xl">🦊</div>
                        </div>
                        <span className="text-xs text-gray-600 dark:text-gray-300">MetaMask</span>
                      </div>
                      
                      {/* Coinbase */}
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 mb-2 bg-[#0052FF] rounded-full flex items-center justify-center p-2 shadow-md">
                          <div className="text-xl">💰</div>
                        </div>
                        <span className="text-xs text-gray-600 dark:text-gray-300">Coinbase</span>
                      </div>
                      
                      {/* WalletConnect */}
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 mb-2 bg-[#3B99FC] rounded-full flex items-center justify-center p-2 shadow-md">
                          <div className="text-xl">🔗</div>
                        </div>
                        <span className="text-xs text-gray-600 dark:text-gray-300">WalletConnect</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
                    By connecting your wallet, you agree to our <span className="text-blue-500 font-medium hover:underline cursor-pointer">Terms of Service</span> and <span className="text-blue-500 font-medium hover:underline cursor-pointer">Privacy Policy</span>
                  </p>

                  {/* Security label */}
                  <div className="mt-6 flex items-center justify-center space-x-2 text-xs text-green-600 dark:text-green-400">
                    <div className="w-4 h-4 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                      <span className="text-xs">✓</span>
                    </div>
                    <span>Secure connection</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Add global keyframe animation */}
      <style jsx global>{`
        @keyframes pulse-slow {
          0%, 100% {
            box-shadow: 0 0 15px 0 rgba(139, 92, 246, 0.5);
          }
          50% {
            box-shadow: 0 0 25px 5px rgba(139, 92, 246, 0.7);
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s infinite;
        }
      `}</style>
    </>
  );
} 