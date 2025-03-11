"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

export default function EthereumAnimation() {
  const svgRef = useRef<SVGSVGElement>(null);
  const { theme } = useTheme();
  
  useEffect(() => {
    // Reset animation when theme changes
    const svg = svgRef.current;
    if (svg) {
      svg.classList.remove("animate");
      // Force reflow using a safe approach
      void svg.getBoundingClientRect();
      svg.classList.add("animate");
    }
  }, [theme]);

  return (
    <div className="ethereum-animation-container w-full h-full flex items-center justify-center py-8">
      <div className="relative w-64 h-64 md:w-80 md:h-80 max-w-full">
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-indigo-500/20 dark:from-blue-500/30 dark:to-indigo-500/30 blur-xl animate-pulse"></div>
        
        {/* Ethereum SVG */}
        <svg 
          ref={svgRef}
          viewBox="0 0 256 417" 
          xmlns="http://www.w3.org/2000/svg" 
          preserveAspectRatio="xMidYMid" 
          className="w-full h-full animate relative z-10"
        >
          <g className="ethereum-symbol">
            {/* Diamond outline */}
            <path 
              d="M127.9611 0 125.1661 9.5 125.1661 285.168 127.9611 287.958 255.9231 212.32 127.9611 0Z" 
              className="fill-blue-600 dark:fill-blue-400 opacity-90 animate-diamond"
            />
            {/* Left side */}
            <path 
              d="M127.962 0 0 212.32 127.962 287.959 127.962 154.158 127.962 0Z" 
              className="fill-indigo-500 dark:fill-indigo-300 opacity-90 animate-diamond-left"
            />
            {/* Diamond right top */}
            <path 
              d="M127.9611 312.1866 126.3861 314.1066 126.3861 412.3056 127.9611 416.9066 255.9991 236.5866 127.9611 312.1866Z" 
              className="fill-blue-600 dark:fill-blue-400 opacity-90 animate-diamond-bottom"
            />
            {/* Diamond left bottom */}
            <path 
              d="M127.962 416.9052 127.962 312.1852 0 236.5852 127.962 416.9052Z" 
              className="fill-indigo-500 dark:fill-indigo-300 opacity-90 animate-diamond-left-bottom"
            />
            {/* Center line */}
            <path 
              d="M127.9611 287.9577 255.9211 212.3207 127.9611 154.1587 127.9611 287.9577Z" 
              className="fill-blue-800 dark:fill-blue-200 opacity-90 animate-diamond-center"
            />
            {/* Bottom center line */}
            <path 
              d="M0.0009 212.3208 127.9609 287.9578 127.9609 154.1588 0.0009 212.3208Z" 
              className="fill-indigo-700 dark:fill-indigo-100 opacity-90 animate-diamond-center-bottom"
            />
          </g>
          
          {/* Orbital particles */}
          <circle 
            cx="127.5" 
            cy="208.5" 
            r="4" 
            className="particle-1 fill-blue-400 dark:fill-blue-300"
          />
          <circle 
            cx="127.5" 
            cy="208.5" 
            r="3" 
            className="particle-2 fill-indigo-400 dark:fill-indigo-300"
          />
          <circle 
            cx="127.5" 
            cy="208.5" 
            r="2" 
            className="particle-3 fill-blue-300 dark:fill-blue-200"
          />
        </svg>
        
        {/* Hover text */}
        <div className="absolute bottom-0 left-0 right-0 text-center text-sm font-medium text-zinc-600 dark:text-zinc-300 opacity-0 hover:opacity-100 transition-opacity duration-300">
          Ethereum
        </div>
      </div>
      
      <style jsx>{`
        .animate-diamond {
          animation: pulse 3s ease-in-out infinite;
        }
        
        .animate-diamond-left {
          animation: pulse 3s ease-in-out infinite 0.2s;
        }
        
        .animate-diamond-bottom {
          animation: pulse 3s ease-in-out infinite 0.4s;
        }
        
        .animate-diamond-left-bottom {
          animation: pulse 3s ease-in-out infinite 0.6s;
        }
        
        .animate-diamond-center {
          animation: glow 3s ease-in-out infinite;
        }
        
        .animate-diamond-center-bottom {
          animation: glow 3s ease-in-out infinite 0.5s;
        }
        
        .particle-1 {
          animation: orbit 8s linear infinite;
          transform-origin: 127.5px 208.5px;
        }
        
        .particle-2 {
          animation: orbit 12s linear infinite reverse;
          transform-origin: 127.5px 208.5px;
        }
        
        .particle-3 {
          animation: orbit 10s linear infinite;
          transform-origin: 127.5px 208.5px;
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 0.9;
          }
          50% {
            opacity: 0.7;
          }
        }
        
        @keyframes glow {
          0%, 100% {
            opacity: 0.9;
            filter: brightness(1);
          }
          50% {
            opacity: 1;
            filter: brightness(1.3);
          }
        }
        
        @keyframes orbit {
          0% {
            transform: rotate(0deg) translateX(80px) rotate(0deg);
          }
          100% {
            transform: rotate(360deg) translateX(80px) rotate(-360deg);
          }
        }
        
        .ethereum-symbol {
          animation: float 6s ease-in-out infinite;
          transform-origin: center;
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate {
          animation: entrance 1.5s ease-out forwards;
        }
        
        @keyframes entrance {
          0% {
            opacity: 0;
            transform: scale(0.8) translateY(20px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
