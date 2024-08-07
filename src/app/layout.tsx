import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "@/styles/globals.css";
import NavBar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import { ThemeProvider } from "@/components/theme-provider";
import Head from "next/head";
import NextTopLoader from "nextjs-toploader";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://andrs.vercel.app/"),
  title: "&R Portfolio",
  description: "Web portfolio with Next.js and Tailwind CSS",
  openGraph: {
    images: [
      {
        url: "https://andrs.vercel.app/opengraph-image.png",
        width: 1200,
        height: 627,
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
        {/* HTML meta tags */}
        <title>&R Portfolio</title>
        <meta
          name="description"
          content="Web portfolio with Next.js and Tailwind CSS"
        />

        {/* Facebook Meta Tags */}
        <meta property="og:url" content="https://andrs.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="&R Portfolio" />
        <meta
          property="og:description"
          content="Web portfolio with Next.js and Tailwind CSS"
        />
        <meta
          property="og:image"
          content={"https://andrs.vercel.app/opengraph-image.png"}
        />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="andrs.vercel.app" />
        <meta property="twitter:url" content="https://andrs.vercel.app/" />
        <meta name="twitter:title" content="&R Portfolio" />
        <meta
          name="twitter:description"
          content="Web portfolio with Next.js and Tailwind CSS"
        />
        <meta
          name="twitter:image"
          content={"https://andrs.vercel.app/opengraph-image.png"}
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
              <div className="flex-1 w-full md:pt-5">{children}</div>
              <Footer />
            </main>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
