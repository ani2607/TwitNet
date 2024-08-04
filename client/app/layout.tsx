import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TwitNet",
  description: "A Twitter like network made with Next.js and Tailwind CSS",
};

const googleClientId : string = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || '';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{backgroundColor: 'black'}}>
      <Toaster/>
      <GoogleOAuthProvider clientId={googleClientId}>
      <body className={inter.className}>{children}</body>
      </GoogleOAuthProvider>
    </html>
  );
}
