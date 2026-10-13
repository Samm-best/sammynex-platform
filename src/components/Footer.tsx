import Link from "next/link";
import { Github, Mail, MessageCircle, Twitter } from "lucide-react";
import { contact } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Link href="/" className="brand brand-light"><span className="brand-mark" aria-hidden>S</span><span>Sammy<b>Nex</b></span></Link>
          <p className="footer-tag">Bringing ideas into a reality — one project at a time.</p>
          <div className="footer-social">
            <a href={contact.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a>
            <a href={contact.x} target="_blank" rel="noreferrer" aria-label="X / Twitter"><Twitter size={18} /></a>
            <a href={contact.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp"><MessageCircle size={18} /></a>
            <a href={`mailto:${contact.email}`} aria-label="Email"><Mail size={18} /></a>
          </div>
        </div>
        <div>
          <h4>Explore</h4>
          <Link href="/#about">About</Link><Link href="/#projects">Projects</Link><Link href="/#services">Services</Link><Link href="/#gallery">Gallery</Link>
        </div>
        <div>
          <h4>Learn</h4>
          <Link href="/courses">All courses</Link><Link href="/courses/python-zero-to-advanced">Python</Link><Link href="/courses/frontend-web-development">Frontend</Link><Link href="/login">Student sign in</Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} SammyNex. Learn • Build • Grow.</p>
        <Link href="/#contact">Start a project →</Link>
      </div>
    </footer>
  );
}
