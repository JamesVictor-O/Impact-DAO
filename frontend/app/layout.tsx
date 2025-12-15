import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { FarcasterReadyProvider } from "../components/FarcasterReadyProvider";
import { PrivyProvider } from "../components/PrivyProvider";

const bodyFont = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

const displayFont = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Proof of Impact | Impact DAO Funding Platform",
  description:
    "Quadratic funding for local public goods. Amplify impact for verified SMEs and community projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${bodyFont.variable} ${displayFont.variable} antialiased`}
      >
        <PrivyProvider>
          <FarcasterReadyProvider>{children}</FarcasterReadyProvider>
        </PrivyProvider>
      </body>
    </html>
  );
}
