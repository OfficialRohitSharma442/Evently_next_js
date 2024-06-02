import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Variable } from "lucide-react";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'

const poppins = Poppins({
  subsets: ["latin"],
  weight: ['500', '600', '700', '800'],
  variable: "--font-poppins"

});

export const metadata: Metadata = {
  title: "Evently",
  description: "Evently is a Event Management work Envirement",
  icons: {
    icon: "./assets/images/logo.svg"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={poppins.variable}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
