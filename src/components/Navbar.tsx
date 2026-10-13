"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, LogIn } from "lucide-react";

const links = [["About", "/#about"], ["Skills", "/#skills"], ["Projects", "/#projects"], ["Gallery", "/#gallery"], ["Courses", "/courses"], ["Contact", "/#contact"]];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKey); };
  }, [open]);

  // Highlight the section currently in view on the home page
  useEffect(() => {
    if (pathname !== "/") { setActive(""); return; }
    const sections = links.map(([, h]) => h.startsWith("/#") ? document.getElementById(h.slice(2)) : null).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [pathname]);

  const isActive = (href: string) => href.startsWith("/#") ? pathname === "/" && active === href.slice(2) : pathname.startsWith(href);

  return (
    <header className={`site-header${scrolled || pathname !== "/" ? " is-scrolled" : ""}${open ? " menu-open" : ""}`}>
      <nav className="container nav-inner" aria-label="Main">
        <Link href="/" className="brand" aria-label="SammyNex home">
          <span className="brand-mark" aria-hidden>S</span>
          <span>Sammy<b>Nex</b></span>
        </Link>
        <div className="nav-links">
          {links.map(([label, href]) => <Link key={label} href={href} className={isActive(href) ? "active" : ""}>{label}</Link>)}
        </div>
        <div className="nav-right">
          <Link href="/login" className="nav-cta"><LogIn size={16} /> <span>Student sign in</span></Link>
          <button className="menu-btn" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen((o) => !o)}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>
      <div className="mobile-menu" aria-hidden={!open}>
        {links.map(([label, href], i) => (
          <Link key={label} href={href} style={{ transitionDelay: open ? `${80 + i * 45}ms` : "0ms" }} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>{label}</Link>
        ))}
        <Link href="/login" className="btn-primary" onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>Student sign in</Link>
      </div>
    </header>
  );
}
