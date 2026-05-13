import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Salma Khandoker | Web Developer Portfolio",
  description: "Expert web development services by Salma Khandoker.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
