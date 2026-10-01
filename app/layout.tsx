import type { Metadata } from "next";
import { Geist_Mono, Poppins } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import { Footer } from "@/components/layout/Footer";
import { AuthProvider } from "@/features/auth/context/AuthContext";
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
  title: 'ByteSpace — Learn from creators',
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
        <NextTopLoader
          color="#003BE2"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px #003BE2, 0 0 5px #D4FB20"
        />
        <AuthProvider>
          <div className="flex-1 flex flex-col">{children}</div>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
