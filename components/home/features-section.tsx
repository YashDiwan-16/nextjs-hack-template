import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Zap, Layers, Code, Share2, Key } from "lucide-react";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureProps) {
  return (
    <Card className="border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm transition-all duration-300 group overflow-hidden relative transform hover:-translate-y-2  cursor-pointer hover:shadow-[0_20px_80px_-10px_rgba(59,130,246,0.3)]">
      {/* Gradient background that appears on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></div>
      
      {/* Highlight border glow effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
        <div className="absolute inset-[-1px] rounded-lg p-[1px]">
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/20 to-indigo-500/20 blur-sm"></div>
        </div>
      </div>
      
      <CardHeader className="pb-2 relative z-10">
        {/* Icon container with enhanced hover effect */}
        <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-gradient-to-br from-blue-500/10 to-indigo-500/10 text-blue-400 mb-4 transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]">
          {icon}
        </div>
        <CardTitle className="text-xl font-semibold text-white transition-colors duration-300 ease-in-out group-hover:text-blue-400">{title}</CardTitle>
      </CardHeader>
      <CardContent className="relative z-10">
        <CardDescription className="text-zinc-400 text-base transition-colors duration-300 ease-in-out group-hover:text-zinc-300">
          {description}
        </CardDescription>
      </CardContent>
      
      {/* Subtle corner accent */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out rounded-bl-full"></div>
    </Card>
  );
}

export default function FeaturesSection() {
  const features: FeatureProps[] = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Security First",
      description: "Built with industry best practices for secure blockchain development, protecting your assets and data."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast",
      description: "Optimized performance with low latency responses and efficient transaction processing."
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Scalable Architecture",
      description: "Designed to scale with your needs, from small projects to enterprise-level applications."
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Developer Friendly",
      description: "Comprehensive documentation and intuitive APIs make development a breeze."
    },
    {
      icon: <Share2 className="w-6 h-6" />,
      title: "Interoperable",
      description: "Seamlessly connect with other blockchain networks and traditional systems."
    },
    {
      icon: <Key className="w-6 h-6" />,
      title: "Full Ownership",
      description: "Maintain complete control over your keys and data with our decentralized approach."
    }
  ];

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Subtle grid pattern background */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-10"></div>
      
      {/* Glowing accent elements */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>
      
      <div className="container px-4 mx-auto relative">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center rounded-full bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-400 mb-4">
            Features
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Everything you need to <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-500">build on blockchain</span>
          </h2>
          <p className="text-lg text-zinc-400 max-w-3xl mx-auto">
            Our platform provides all the essential tools and services to create secure, 
            scalable and user-friendly blockchain applications.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
} 