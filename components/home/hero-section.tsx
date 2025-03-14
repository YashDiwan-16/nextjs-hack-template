import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background elements */}
      <div className="absolute inset-0 bg-black dark:bg-black bg-white/95 -z-10" />
      
      {/* Grid pattern with reduced opacity */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-5 dark:opacity-10 -z-10" />
      
      {/* Glowing accent elements */}
      <div className="absolute top-1/4 -right-24 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 -left-20 w-72 h-72 bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-3xl -z-10" />
      
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-8 max-w-xl">
            {/* Glowing badge */}
            <div className="inline-flex items-center rounded-full border border-zinc-300 dark:border-zinc-800 px-3 py-1 text-sm font-medium text-blue-600 dark:text-blue-400 bg-zinc-100/80 dark:bg-zinc-900/80 backdrop-blur-sm self-start">
              <span className="flex h-2 w-2 rounded-full bg-blue-500 mr-2 animate-pulse"></span>
              Blockchain Innovation Hub
            </div>
            
            {/* Headline with gradient text */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-zinc-900 dark:text-white">
              Building the <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-500">decentralized</span> future together
            </h1>
            
            {/* Description with improved readability */}
            <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
              Experience the next generation of blockchain technology. 
              Our platform offers seamless integration, robust security, 
              and innovative solutions for developers and enterprises.
            </p>
            
            {/* Call to action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white border-0 rounded-lg font-medium">
                Get Started
              </Button>
              <Button variant="outline" size="lg" className="border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg gap-2 group">
                Learn More <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
          
          {/* Hero image with glow effects */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              {/* Subtle shadow behind image */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-500/20 to-indigo-500/20 blur-2xl opacity-50 dark:opacity-70"></div>
              
              {/* Main image with border */}
              <div className="relative rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden bg-zinc-100 dark:bg-zinc-900">
                <Image 
                  src="/hero-platform.svg" 
                  alt="Blockchain Dashboard" 
                  width={580} 
                  height={440}
                  className="w-full h-auto"
                />
                
                {/* Glass panel overlays */}
                <div className="absolute top-8 right-8 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-zinc-200 dark:border-zinc-800">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="text-xs font-medium text-zinc-900 dark:text-white">Network Active</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 