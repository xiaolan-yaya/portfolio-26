import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { site } from "@/site.config";
import "./globals.css";

export const metadata: Metadata = {
  title: "yaya's portfolio",
  description: "Interaction design, UX research and brand work by Xiaolan (Yaya) Zheng.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {site.adobeFontsKitId ? (
          // React hoists this into <head> automatically
          <link rel="stylesheet" href={`https://use.typekit.net/${site.adobeFontsKitId}.css`} precedence="default" />
        ) : null}
        <Nav />
        <main className="container">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
