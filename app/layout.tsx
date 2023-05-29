"use client"
import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import Providers from "./providers";
import Navbar from "@/components/shared/Navbar";
import { store } from "./store";
import { Provider } from "react-redux";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Music World",
  description: "Where words fail, music speaks.",
  icons: "/icon.png",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <Provider store={store}>
          <Providers>
            <Navbar />
            <div className="px-5 sm:px-10 py-5">{children}</div>
          </Providers>
        </Provider>
      </body>
    </html>
  );
}
