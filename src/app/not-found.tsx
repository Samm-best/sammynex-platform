import Link from "next/link";
import { ArrowLeft, BookOpen } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="nf-shell">
        <div className="hero-bg" aria-hidden><span className="blob b1" /><span className="blob b2" /><span className="hero-grid" /></div>
        <div className="container nf-inner">
          <p className="nf-code">404</p>
          <h1 className="page-title">This page isn’t here.</h1>
          <p className="section-intro">The link may be broken or the page may have moved.</p>
          <div className="hero-actions" style={{ justifyContent: "center" }}>
            <Link href="/" className="btn-primary"><ArrowLeft size={18} /> Return home</Link>
            <Link href="/courses" className="btn-ghost"><BookOpen size={18} /> Browse courses</Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
