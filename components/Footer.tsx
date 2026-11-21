import { site } from "@/site.config";

export default function Footer() {
  return (
    <footer className="container footer">
      <div className="links">
        <a className="paren-link" href={`mailto:${site.email}`}>(let’s talk!)</a>
        <a className="paren-link" href={site.linkedin} target="_blank" rel="noreferrer">(linkedin)</a>
        <a className="paren-link" href={site.resume} target="_blank" rel="noreferrer">(resume)</a>
        <a className="paren-link" href={site.instagram} target="_blank" rel="noreferrer">(instagram)</a>
      </div>
      <p className="bye">thank you! see yaaa</p>
    </footer>
  );
}
