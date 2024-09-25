import type { Metadata } from "next";
import localFont from "next/font/local";
import FloatingNavDemo from "./components/ui/Navbar";
import Footer from './components/ui/Footer';  // Import the Footer component
import "./globals.css";

// Load local fonts
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

// Page metadata for SEO
export const metadata: Metadata = {
  title: "On Lycanthropy Book",
  description: "Histocracy Publishing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Histocracy Publishing presents 'On Lycanthropy', a historical translation of 16th-century works." />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen antialiased bg-background text-foreground`}
      >
     
        <FloatingNavDemo />
 
        <main className="flex-grow">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
