"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import ModeToggle from "./darkmode";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import WagmiWalletButton from "../wallet/connect-button";
import Link from "next/link";

// Navigation items array for reuse
const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "about" },
  { label: "Services", href: "services" },
  { label: "Contact", href: "contact" },
];

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-white text-black dark:bg-black dark:text-white transition-colors duration-300 z-50">
      {/* Logo */}
      <div className="text-xl font-bold">Brand</div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-6">
        {navItems.map((item, index) => (
          <Link key={index} href={item.href} className="hover:text-gray-600 dark:hover:text-gray-300">
            {item.label}
          </Link>
        ))}

        {/* Connect Button & Dark Mode Toggle */}
        <div className="flex items-center space-x-8">
          <ModeToggle />
          <div className="md:block w-[180px]">
            <WagmiWalletButton />
          </div>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="w-6 h-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="bg-white text-black dark:bg-black dark:text-white w-64 transition-colors duration-300">
          <div className="flex flex-col space-y-4 p-4">
            {navItems.map((item, index) => (
              <a key={index} href={item.href} className="hover:text-gray-600 dark:hover:text-gray-300">
                {item.label}
              </a>
            ))}
            
            {/* Dark Mode Toggle & Connect Button (Only Visible on Mobile) */}
            <div className="flex flex-col space-y-2 pt-2">
              <ModeToggle />
              <div className="w-full">
                <ConnectButton />
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
}
