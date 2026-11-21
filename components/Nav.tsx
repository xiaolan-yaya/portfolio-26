import Link from "next/link";

export default function Nav() {
  return (
    <header className="container nav">
      <Link href="/" className="logo">Yaya Zheng</Link>
      <nav className="links">
        <Link href="/#work">Work</Link>
        <Link href="/about">About</Link>
        <a href="/resume.pdf" target="_blank" rel="noreferrer">Resume</a>
      </nav>
    </header>
  );
}
