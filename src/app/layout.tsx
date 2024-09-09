import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import NavBar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import { ThemeProvider } from "@/components/theme-provider";
import Head from "next/head";
import NextTopLoader from "nextjs-toploader";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://andrs.vercel.app/"),
  title: "&R Portfolio",
  description: "Building websites and native apps.",
  openGraph: {
    type: "website",
    url: "https://andrs.vercel.app/",
    title: "&R Portfolio",
    description: "Building websites and native apps.",
    images: [
      {
        url: "https://andrs.vercel.app/og-image.png",
        alt: "&R Portfolio",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@anderrodsan",
    site: "@anderrodsan",
    title: "&R Portfolio",
    description: "Building websites and native apps.",
    images: [
      {
        url: "https://andrs.vercel.app/og-image.png",
        alt: "&R Portfolio",
        width: 1200,
        height: 630,
      },
    ],
  },
  icons: {
    icon: "/icon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Head>
        <link href="https://github.com/anderrodsan" rel="me" />
        <Script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="599262e3-cda4-40fc-bec2-5d7febf4e524"
        />
      </Head>
      <html lang="en">
        <body className={`${inter.className} antialiased`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <main className="relative flex flex-col justify-start items-center min-h-[100dvh] bg-background w-full">
              <NavBar />
              <NextTopLoader />
              <div className="flex-1 w-full md:pt-5 sm:p-5 md:px-0">
                {children}
              </div>
              <Footer />
            </main>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
