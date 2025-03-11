import React from "react";
import { cn } from "@/lib/utils";

interface ContactTextProps extends React.HTMLAttributes<HTMLDivElement> {}

export function ContactText({ className, ...props }: ContactTextProps) {
  return (
    <div 
      className={cn(
        "p-4 sm:p-6 md:absolute md:top-8 md:left-8", 
        className
      )} 
      {...props}
    >
      <h1 className="text-2xl sm:text-2xl md:text-3xl font-bold tracking-tight text-foreground">
        Let&apos;s connect and create.
      </h1>
      <div className="mt-2 h-1 w-16 sm:w-20 bg-primary rounded-full" />
      <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400 max-w-md">
        Have a project in mind? I'd love to hear from you.
      </p>
    </div>
  );
}

export default ContactText;