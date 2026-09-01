import type { Metadata } from "next";
import { Poppins, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "./components/CustomCursor";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "WELONIX — AI × Language × Data Intelligence Platform",
  description: "WELONIX powers enterprise AI systems through the synergy of AI, Language Intelligence, Data Intelligence, and Human Judgment.",
  keywords: ["AI Data", "LLM Evaluation", "AI Translation", "Document AI", "Multilingual Data Annotation", "Human in the loop AI"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <body className="bg-white dark:bg-[#05070d] text-slate-900 dark:text-slate-100 antialiased selection:bg-blue-600/30 selection:text-blue-600 transition-colors duration-300">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}

