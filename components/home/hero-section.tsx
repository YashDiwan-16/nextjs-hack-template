import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background elements */}
      <div className="absolute inset-0 bg-black -z-10" />
      
      {/* Grid pattern with reduced opacity */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-10 -z-10" />
      
      {/* Glowing accent elements */}
      <div className="absolute top-1/4 -right-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 -left-20 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl -z-10" />
      
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-8 max-w-xl">
            {/* Glowing badge */}
            <div className="inline-flex items-center rounded-full border border-zinc-800 px-3 py-1 text-sm font-medium text-blue-400 bg-zinc-900/80 backdrop-blur-sm self-start">
              <span className="flex h-2 w-2 rounded-full bg-blue-500 mr-2 animate-pulse"></span>
              Blockchain Innovation Hub
            </div>
            
            {/* Headline with gradient text */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
              Building the <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-500">decentralized</span> future together
            </h1>
            
            <p className="text-lg md:text-xl text-zinc-300">
              Empowering developers and businesses with cutting-edge blockchain solutions. Open-source, secure, and ready for your next big idea.
            </p>
            
            {/* CTA buttons with improved styling */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gap-2 font-medium bg-gradient-to-r from-blue-600 to-indigo-600 border-0 hover:from-blue-700 hover:to-indigo-700">
                Get Started <ArrowRight className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="lg" className="font-medium border-zinc-700 text-white bg-transparent hover:bg-zinc-800">
                Explore Demos
              </Button>
            </div>
            
            {/* Social proof with glowing effect */}
            <div className="flex items-center space-x-4 pt-6">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-9 h-9 rounded-full border-2 border-black overflow-hidden ring-2 ring-blue-500/20">
                    <Image 
                      src={`/team/member${i}.jpg`} 
                      alt={`Team member ${i}`} 
                      width={36} 
                      height={36}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <p className="text-sm text-zinc-400">
                <span className="font-semibold text-white">500+</span> developers are building with us
              </p>
            </div>
          </div>
          
          {/* Hero image with enhanced styling */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg aspect-square rounded-2xl p-6">
              {/* Glowing accent elements */}
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-blue-500 rounded-xl opacity-20 blur-md"></div>
              <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-indigo-600 rounded-xl opacity-20 blur-md"></div>
              
              {/* Main content with frosted glass effect */}
              <div className="relative h-full w-full overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm shadow-inner">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10"></div>
                <Image
                  src="/hero-platform.svg" 
                  alt="Blockchain Platform" 
                  fill
                  className="object-cover p-4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 