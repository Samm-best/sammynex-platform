import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseExplorer from "@/components/CourseExplorer";
import { courses } from "@/lib/data";

export const metadata: Metadata = { title: "Courses", description: "Practical SammyNex learning paths in programming, web development, databases and more." };

export default function CoursesPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="page-hero">
          <div className="hero-bg" aria-hidden><span className="blob b1" /><span className="blob b2" /><span className="hero-grid" /></div>
          <div className="container">
            <Link href="/" className="breadcrumb"><ArrowLeft size={16} /> Back home</Link>
            <p className="section-kicker load-in">SammyNex Learn</p>
            <h1 className="page-title load-in" style={{ animationDelay: "100ms" }}>Course <span className="gradient-text">catalogue</span></h1>
            <p className="section-intro load-in" style={{ animationDelay: "200ms" }}>Practical learning paths built around clear explanations, exercises, and projects. Course content, pricing, schedules, and enrolment will be published after each course is prepared and reviewed.</p>
          </div>
        </section>
        <section className="section section-tight">
          <div className="container"><CourseExplorer courses={courses} /></div>
        </section>
      </main>
      <Footer />
    </>
  );
}
