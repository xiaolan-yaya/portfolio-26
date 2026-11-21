import type { Metadata } from "next";
import Nav from "@/components/Nav";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yaya Zheng — Interaction Designer",
  description: "UX research, interaction design and brand work by Yaya Zheng.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main className="container">{children}</main>
        <footer className="container footer">
          © {new Date().getFullYear()} Yaya Zheng · Seattle, WA
        </footer>
      </body>
    </html>
  );
}
