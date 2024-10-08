import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import ParallaxStars from "@/components/ParallaxStars";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Chakkrit Jk | Personal Portfolio",
  description: "Chakkrit, A Computer Engineering Student.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <div className="fixed inset-0 z-0 opacity-20">
              <ParallaxStars />
            </div>
            <Header />
            <main className="relative z-10">
              {children}
              <ThemeSwitch />
            </main>
            <Footer />
            <Toaster
              position="bottom-center"
              reverseOrder={false}
            />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
