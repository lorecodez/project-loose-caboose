import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { lazy, Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Loose Caboose Hobbies",
  description: "The Loose Caboose is a COMPLETE train & hobby shop located in Napa. Call us at 707-258-1222 visit us 820 3rd Street in Napa, CA at the corner of 3rd and Soscol Ave",
};

const Head = lazy(() => import('@/app/components/Head').then( module => {
  return {default: module.default}
}))

const Foot = lazy(() => import('@/app/components/Foot').then( module => {
  return {default: module.default}
}))

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <Suspense fallback={<p>Loading...</p>}>
            <Head/>
          </Suspense>
        </header>
        {children}
        <footer>
          <Foot/>
        </footer>
      </body>
    </html>
  );
}
