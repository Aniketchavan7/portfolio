"use client";
import { usePathname } from "next/navigation";
import SocketContextProvider from "@/contexts/socketio";
import Preloader from "./preloader";
import { ThemeProvider } from "./theme-provider";
import { Toaster } from "./ui/toaster";

import { TooltipProvider } from "./ui/tooltip";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  // Product landing pages keep their own branding. The directory shares the
  // portfolio theme without loading its 3D preloader or realtime providers.
  if (pathname.startsWith("/apps/")) return <>{children}</>;
  if (pathname === "/apps") return (
    <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
      {children}
    </ThemeProvider>
  );
  return <ThemeProvider
    attribute="class"
    defaultTheme="dark"
    disableTransitionOnChange
  >
    <Preloader>
      <SocketContextProvider>
        <TooltipProvider>
          {children}
        </TooltipProvider>
        <Toaster />
      </SocketContextProvider>
    </Preloader>
  </ThemeProvider>;
};
