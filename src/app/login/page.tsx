import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, BookOpen, LockKeyhole, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = { title: "Student sign in" };

export default function LoginPage() {
  return (
    <>
      <Navbar />
      <main className="login-shell">
        <div className="hero-bg" aria-hidden><span className="blob b1" /><span className="blob b2" /><span className="hero-grid" /></div>
        <div className="container login-layout">
          <div className="login-visual load-in">
            <Image src="/images/sammy-portrait.jpg" alt="Sammy, founder of SammyNex" width={949} height={1024} sizes="(max-width: 900px) 0px, 420px" />
            <div className="login-quote"><Sparkles size={18} /> “Learn by building real things.”</div>
          </div>
          <section className="login-card load-in" style={{ animationDelay: "120ms" }}>
            <Link href="/" className="breadcrumb"><ArrowLeft size={16} /> Back to website</Link>
            <div className="icon-tile"><LockKeyhole size={24} /></div>
            <p className="section-kicker">SammyNex Learn</p>
            <h1 className="section-title login-title">Student sign in</h1>
            <p className="card-copy">The account system is not connected yet. Sign-in, password recovery, and student dashboards will be enabled when authentication is configured.</p>
            <form className="login-form" aria-disabled>
              <label className="field"><span>Email</span><input type="email" placeholder="you@example.com" disabled /></label>
              <label className="field"><span>Password</span><input type="password" placeholder="••••••••" disabled /></label>
              <button type="button" className="btn-primary btn-block" disabled>Sign in — coming soon</button>
            </form>
            <div className="notice"><Sparkles size={17} /> For now, you can explore the public course catalogue or contact SammyNex to ask about upcoming training.</div>
            <Link href="/courses" className="btn-secondary btn-block"><BookOpen size={18} /> Explore courses</Link>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
