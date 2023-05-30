import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import App from "./app";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Music World",
  description: "Where words fail, music speaks.",
  icons: "/icon-a.png",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <App children={children} />
      </body>
    </html>
  );
}
