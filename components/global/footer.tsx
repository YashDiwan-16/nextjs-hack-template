import { FC } from "react";
import Link from "next/link";
import { Github, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer: FC = () => {
  const socialLinks = [
    {
      href: "https://github.com",
      icon: <Github className="h-4 w-4" />,
      label: "GitHub",
    },
    {
      href: "https://twitter.com",
      icon: <Twitter className="h-4 w-4" />,
      label: "Twitter",
    },
    {
      href: "https://linkedin.com",
      icon: <Linkedin className="h-4 w-4" />,
      label: "LinkedIn",
    },
  ];

  const legalLinks = ["Privacy Policy", "Terms & Conditions"];

  return (
    <footer className="bg-background border-t py-3">
      <div className="container mx-auto px-4">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
  {/* Copyright Information */}
  <div className="text-sm flex items-center gap-x-6">
    <span className="font-medium">Hackathon Project</span>
    <span className="text-muted-foreground">
      All rights reserved &copy; {new Date().getFullYear()}
    </span>
  </div>
          
          {/* Social Media Links */}
          <div className="flex items-center gap-1">
            {socialLinks.map((link) => (
              <Button
                key={link.label}
                variant="ghost"
                size="icon"
                asChild
                className="h-7 w-7 rounded-full transition-colors hover:bg-muted"
              >
                <Link
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                >
                  {link.icon}
                </Link>
              </Button>
            ))}
          </div>
          
          {/* Legal Links */}
          <div className="flex items-center gap-4">
            {legalLinks.map((item) => (
              <Link
                key={item}
                href="#"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
