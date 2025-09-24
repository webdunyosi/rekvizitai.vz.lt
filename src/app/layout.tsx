import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "../../utils/Provider";
import { Navbar } from "@/components/Navigation/Navbar";
import MaxWidthWrapper from "@/components/Core/MaxWidthWrapper";
import { Footer } from "@/components/Navigation/Footer";
import { Sidebar } from "@/components/Sidebar/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: "Company XYZ", template: ` %s | Company XYZ` },
  keywords: ["Business", "England", "Top England companies"],
  description: "Best search enginge for England companies",
  openGraph: {
    description: "Best search enginge for England companies",
    images: [""],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Navbar />
          <MaxWidthWrapper className="flex flex-col">
            {children}
          </MaxWidthWrapper>
          <Footer className="mt-4" />
        </Provider>
      </body>
    </html>
  );
}
