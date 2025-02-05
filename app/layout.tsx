import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";

// Configure the Inter font
const interFont = Inter({
  subsets: ["latin"], // Specify subsets for better optimization
  variable: "--font-inter", // Define a CSS variable for the font
  display: "swap", // Use "swap" to improve performance
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
    <ClerkProvider>
      <html lang="en">
        <body className={`${interFont.variable} antialiased`}>
          <div className="min-h-screen bg-gradient-to-tr from-zinc-50 to-zinc-100">
            <div className="wrapper">
              <Navbar />
              {children}
              <Footer />
            </div>
          </div>
          {/* </ThemeProvider> */}
        </body>
      </html>
    </ClerkProvider>
  );
}
