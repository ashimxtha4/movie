import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavSearch from "@/components/navSearch";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className=" h-screen flex flex-col">
          <div className="flex justify-between px-8 py-3 gap-16 sm:px-20">
            <ul className="flex gap-3">
              <li>TV</li>
              <li>Movie</li>
            </ul>
            <NavSearch />
          </div>
          <div className="flex flex-col items-center justify-items-center h-full px-8 pb-20 gap-16 sm:px-20 font-[family-name:var(--font-geist-sans)] overflow-y-scroll">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
