import type { Metadata, Viewport } from "next";
import { Chakra_Petch, Rajdhani, Space_Mono } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/**
 * Font definition using next-fonts
 */
const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const chakraPetch = Chakra_Petch({
  variable: "--font-chakra-petch",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: { default: "Dagger Defense Industries", template: "%s · Dagger Defense Industries" },
  description: "A premier Star Citizen gaming organization. Exploration, conquest, and community across the stars.",
  metadataBase: new URL("https://www.daggerdefenseindustry.com"),
  openGraph: {
    title: "Dagger Defense Industries",
    description: "A premier Star Citizen gaming organization dedicated to the immersive universe of Star Citizen.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dagger Defense Industries",
    description: "A premier Star Citizen gaming organization dedicated to the immersive universe of Star Citizen.",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-schema: dark)", color: "#0a0a0a" },
    { media: "(prefers-color-schema: light)", color: "faf8f5" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html
      lang='en'
      className={`${rajdhani.variable} ${chakraPetch.variable} ${spaceMono.variable} dark`}
      suppressHydrationWarning
    >
      <body className='min-h-dvh flex flex-col font-body antialiased'>
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem={false}
          storageKey='ddi-theme'
          disableTransitionOnChange
        >
          <Header /> <main className='flex-1'>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
