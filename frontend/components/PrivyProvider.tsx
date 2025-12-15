"use client";

import { PrivyProvider as PrivyProviderBase } from "@privy-io/react-auth";
import { ReactNode } from "react";

interface PrivyProviderProps {
  children: ReactNode;
}

export function PrivyProvider({ children }: PrivyProviderProps) {
  return (
    <PrivyProviderBase
      appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID || ""}
      config={{
        // Customize Privy configuration
        appearance: {
          theme: "dark",
          accentColor: "#13ec6d",
          logo: "/Logo.png",
        },
        // Enable email, wallet, and social login methods
        loginMethods: ["email", "wallet", "sms"],
        embeddedWallets: {
          createOnLogin: "users-without-wallets",
        },
      }}
    >
      {children}
    </PrivyProviderBase>
  );
}
