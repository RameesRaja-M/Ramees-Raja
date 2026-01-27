import { Outfit } from "next/font/google";
import "./globals.css";

// Components
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Theme Provider 
import { ThemeProvider } from "@/components/ThemeProvider";

const outfit = Outfit({
  variable: "--font-outfit-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ramees Raja",
  description: "Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${outfit.variable} antialiased`}
      >
        <ThemeProvider attribute='class' defaultTheme='light'>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
