import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import { SessionProvider } from "next-auth/react";
import Layout from "./components/Layout";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "YourEcommerce",
  description: "By Shubh Shrivastava",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
      
     
    </html>
  );
}
