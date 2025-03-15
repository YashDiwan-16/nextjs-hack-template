import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Zap, Layers, Code, Share2, Key } from "lucide-react";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureProps) {
  return (
    <Card className="border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm transition-all duration-300 group overflow-hidden relative transform hover:-translate-y-2 cursor-pointer hover:shadow-[0_20px_80px_-10px_rgba(59,130,246,0.3)]">
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
        <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-gradient-to-br from-blue-500/10 to-indigo-500/10 text-blue-600 dark:text-blue-400 mb-4 transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]">
          {icon}
        </div>
        <CardTitle className="text-xl font-semibold text-zinc-900 dark:text-white transition-colors duration-300 ease-in-out group-hover:text-blue-600 dark:group-hover:text-blue-400">{title}</CardTitle>
      </CardHeader>
      <CardContent className="relative z-10">
        <CardDescription className="text-zinc-700 dark:text-zinc-300">{description}</CardDescription>
      </CardContent>
      
      {/* Subtle corner accent */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out rounded-bl-full"></div>
    </Card>
  );
}

export default function FeaturesSection() {
  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Best-in-class Security",
      description: "Enterprise-grade security with multi-layered protection for your assets and data. Regular audits and open-source verification."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Performance",
      description: "Optimized for speed with transaction finality in seconds, not minutes. Scale to thousands of transactions per second."
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Modular Architecture",
      description: "Flexible design allows you to customize components and create exactly what you need for your specific use case."
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Developer-friendly APIs",
      description: "Comprehensive documentation, intuitive interfaces, and powerful SDKs make development smooth and efficient."
    },
    {
      icon: <Share2 className="w-6 h-6" />,
      title: "Cross-chain Compatibility",
      description: "Seamlessly interact with multiple blockchain networks through our unified interface and bridging solutions."
    },
    {
      icon: <Key className="w-6 h-6" />,
      title: "Advanced Identity",
      description: "Next-generation authentication and authorization with support for decentralized identifiers and verifiable credentials."
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-1/2 left-0 w-full h-96 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 blur-3xl -z-10 transform -translate-y-1/2"></div>
      
      <div className="container px-4 mx-auto">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Powerful Features for Modern Web3 Applications
          </h2>
          <p className="text-lg text-zinc-700 dark:text-zinc-300">
            Our platform provides everything you need to build, deploy, and scale your next blockchain project.
            From smart contract development to user-friendly interfaces, we&apos;ve got you covered.
          </p>
        </div>
        
        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
        
        {/* Accent decoration */}
        <div className="flex justify-center mt-16">
          <div className="w-24 h-1 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500"></div>
        </div>
      </div>
    </section>
  );
} 