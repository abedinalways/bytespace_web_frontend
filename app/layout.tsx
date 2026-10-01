import type { Metadata } from "next";
import { Geist_Mono, Poppins } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'ByteSpace — Learn from creatorse',
  description:
    'Discover courses and learn new skills from independent creators',
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-background font-sans text-foreground antialiased flex flex-col">
        <div className="flex-1 flex flex-col">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
