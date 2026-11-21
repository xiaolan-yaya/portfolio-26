import Link from "next/link";
import { site } from "@/site.config";

export default function Nav() {
  return (
    <header className="container nav">
      <Link href="/" className="logo">yaya</Link>
      <nav className="links">
        <Link href="/#projects">projects</Link>
        <Link href="/playground">playground</Link>
        <Link href="/about">about</Link>
        <a href={site.resume} target="_blank" rel="noreferrer">resume</a>
      </nav>
    </header>
  );
}
