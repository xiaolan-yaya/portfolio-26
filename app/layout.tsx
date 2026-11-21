import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
// Inter Tight (Google Fonts, free for web use), served from this site
import "@fontsource-variable/inter-tight";
import "@fontsource-variable/inter-tight/wght-italic.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "yaya's portfolio",
  description: "Interaction design, UX research and brand work by Xiaolan (Yaya) Zheng.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main className="container">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
