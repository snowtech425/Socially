import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import SessionAuthProvider from "./api/auth/[...nextauth]/sessionProvider";
import { ReduxProvider } from "@/store/provider";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SmallTalk",
  description: "Created with love by Snowtech Innovations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <script
          type="module"
          defer
          src="https://cdn.jsdelivr.net/npm/ldrs/dist/auto/spiral.js"
        ></script>
        <SessionAuthProvider>
          <ReduxProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <Navbar />
              <Toaster
                position="top-center"
                className="!top-[30vh]"
                closeButton
                richColors
              />
              {children}
              <Footer />
            </ThemeProvider>
          </ReduxProvider>
        </SessionAuthProvider>
      </body>
    </html>
  );
}
