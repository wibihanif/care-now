import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./Providers";
import test from "../public/images/care-now.jpeg";
import { CareNowShell } from "./components/CareNowShell";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Care Now Patient Portal",
  description: "Care Now Patient Portal",
  icons: {
    icon: [
      {
        url: "images/care-now.jpeg",
        href: "images/care-now.jpeg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Care Now Patient Portal</title>
        <link rel="icon" href="images/care-now.jpeg" />
      </head>
      <body className={inter.className}>
        <Providers>
          <CareNowShell>{children}</CareNowShell>
        </Providers>
      </body>
    </html>
  );
}
