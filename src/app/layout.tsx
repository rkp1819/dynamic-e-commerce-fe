import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MainLayout from "@/components/layout/MainLayout";
import AuthProvider from "@/components/auth/AuthProvider";
import { Providers } from "@/lib/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EcommerceHub - Your One-Stop Shop",
  description: "Shop the latest products across multiple categories",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Providers>
            <MainLayout>{children}</MainLayout>
          </Providers>
        </AuthProvider>
      </body>
    </html>
  );
}
