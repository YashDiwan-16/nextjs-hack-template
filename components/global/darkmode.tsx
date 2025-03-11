// "use client";
// import { Button } from "@/components/ui/button";
// import { Sun, Moon } from "lucide-react";
// import { useTheme } from "next-themes";
// import { useEffect, useState } from "react";

// export default function DarkModeToggle() {
//   const { theme, setTheme } = useTheme();
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted) return null;

//   return (
//     <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
//       {theme === "dark" ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
//     </Button>
//   );
// }

"use client";
import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
const ModeToggle = () => {
  const { setTheme } = useTheme();

  return (
    <>
      <Button
        variant="outline"
        className="dark:hidden cursor-none"
        size="icon"
        onClick={() => setTheme("dark")}
      >
        <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      </Button>
      <Button
        variant="outline"
        className="hidden dark:flex cursor-none"
        size="icon"
        onClick={() => setTheme("light")}
      >
        <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      </Button>
    </>
  );
};

export default ModeToggle;