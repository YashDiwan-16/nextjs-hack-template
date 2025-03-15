

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {  Home, Search, AlertCircle, MoveLeft } from "lucide-react";

export default function NotFound() {
  const [mounted, setMounted] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => setAnimationComplete(true), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center transition-colors duration-300 overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
       
        {/* Enhanced grid pattern with better positioning */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-5 dark:opacity-8" />
        
        {/* Dynamic dots background - purely CSS-based animation */}
        {mounted && (
          <div className="dots-background absolute inset-0 overflow-hidden">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="dot absolute  rounded-full"
                style={{
                  width: `${Math.max(4, Math.random() * 8)}px`,
                  height: `${Math.max(4, Math.random() * 8)}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDuration: `${10 + Math.random() * 20}s`,
                  animationDelay: `-${Math.random() * 10}s`
                }}
              />
            ))}
          </div>
        )}
      </div>
      
      {/* Content with improved layout and spacing */}
      <div className="relative max-w-3xl mx-auto px-4 py-8 sm:py-12 z-10">
        <div className="bg-white/70 dark:bg-gray-900/50 backdrop-blur-lg rounded-3xl p-6 sm:p-8 md:p-12 shadow-xl border border-gray-100 dark:border-gray-800">
          {/* Improved 404 text with more subtle effects */}
          <div className={`relative mb-8 transition-all duration-1000 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-8xl sm:text-9xl md:text-[10rem] font-extrabold tracking-tighter bg-clip-text  relative">
              404
              
          
             
            </h1>
          </div>
          
          {/* Message with improved typography */}
          <div className={`transition-all duration-700 delay-300 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <h2 className="text-2xl sm:text-3xl font-bold mt-4 mb-2 text-zinc-900 dark:text-white">
              Oops! Page Not Found
            </h2>
            
            <p className="text-md sm:text-lg text-zinc-600 dark:text-zinc-300 mb-8 max-w-md mx-auto">
              The page you are looking for doesn&apos;t exist or has been moved to another location.
            </p>
          </div>
          
          {/* Enhanced animated illustration */}
          <div className={`relative w-48 h-48 sm:w-56 sm:h-56 mx-auto my-8 transition-all duration-700 delay-500 ${mounted ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                {/* Pulsing circles */}
                <div className="absolute inset-0 rounded-full border-4 border-dashed border-blue-300 dark:border-blue-700 opacity-50 animate-spin-slow"></div>
                <div className="absolute inset-0 rounded-full border-4 border-dotted border-indigo-300 dark:border-indigo-700 opacity-30 animate-spin-slower"></div>
                
                {/* Central icon - using AlertCircle for more emphasis */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <Search className={`absolute inset-0 w-24 h-24 text-blue-500 dark:text-blue-400 transition-all duration-1000 ${animationComplete ? 'rotate-0 scale-100 opacity-100' : 'rotate-90 scale-50 opacity-0'}`} strokeWidth={1.5} />
                    <AlertCircle className={`absolute inset-0 w-24 h-24 text-indigo-500 dark:text-indigo-400 transition-all duration-1000 ${!animationComplete ? 'rotate-0 scale-100 opacity-100' : 'rotate-90 scale-50 opacity-0'}`} strokeWidth={1.5} />
                  </div>
                </div>
                
                <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 pulse-animation"></div>
              </div>
            </div>
          </div>
          
          {/* Call to action buttons with improved design and layout */}
          <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 transition-all duration-700 delay-700 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <Button 
              onClick={() => window.history.back()}
              variant="outline"
              className="w-full sm:w-auto flex items-center gap-2 border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 group" 
            >
              <MoveLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Go Back
            </Button>
            
            <Link href="/" className="w-full sm:w-auto">
              <Button className="w-full flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white group">
                <Home className="h-4 w-4 transition-transform group-hover:scale-110" />
                Return to Homepage
              </Button>
            </Link>
          </div>
        </div>
      </div>
      

      {/* CSS for enhanced animations and effects */}
      <style jsx global>{`
        .dots-background .dot {
          opacity: 0;
          animation: float-up 20s linear infinite;
        }

        @keyframes float-up {
          0% {
            transform: translateY(100vh) scale(0);
            opacity: 0;
          }
          10% {
            opacity: 0.7;
          }
          90% {
            opacity: 0.5;
          }
          100% {
            transform: translateY(-100px) scale(1);
            opacity: 0;
          }
        }
        
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes spin-slower {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(-360deg);
          }
        }
        
        @keyframes pulse-animation {
          0%, 100% {
            opacity: 0.6;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05);
          }
        }
        
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
        
        .animate-spin-slower {
          animation: spin-slower 18s linear infinite;
        }
        
        .pulse-animation {
          animation: pulse-animation 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}