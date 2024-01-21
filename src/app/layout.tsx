import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import "@/styles/globals.css";
import NavBar from "@/components/Navbar";
import MobileNavBar from "@/components/Navbar/MobileNavBar";

const epilogue = Epilogue({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OGZ Portfolio",
  description: "A portfolio page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={epilogue.className}>
        <NavBar />
        <div className="max-w-5xl mx-auto text-2xl">{children}</div>
        <MobileNavBar />
      </body>
    </html>
  );
}
