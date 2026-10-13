import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, BarChart3, CheckCircle2, Clock3, Layers3, MonitorPlay } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CourseCard } from "@/components/CourseExplorer";
import { contact, courses } from "@/lib/data";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const course = courses.find((c) => c.slug === params.slug);
  return course ? { title: course.title, description: course.description } : { title: "Course not found" };
}

export default function CourseDetailPage({ params }: Props) {
  const course = courses.find((item) => item.slug === params.slug);
  if (!course) notFound();
  const related = courses.filter((c) => c.slug !== course.slug).slice(0, 3);
  const ask = `${contact.whatsapp}?text=${encodeURIComponent(`Hi Sammy, I'd like to know more about the "${course.title}" course.`)}`;

  return (
    <>
      <Navbar />
      <main>
        <section className="page-hero">
          <div className="hero-bg" aria-hidden><span className="blob b1" /><span className="blob b2" /><span className="hero-grid" /></div>
          <div className="container">
            <Link href="/courses" className="breadcrumb"><ArrowLeft size={16} /> All courses</Link>
            <p className="section-kicker load-in">{course.category}</p>
            <h1 className="page-title load-in" style={{ animationDelay: "100ms" }}>{course.title}</h1>
            <p className="section-intro load-in" style={{ animationDelay: "200ms" }}>{course.description}</p>
            <div className="meta-pills load-in" style={{ animationDelay: "300ms" }}>
              <span><BarChart3 size={16} /> {course.level}</span>
              <span><MonitorPlay size={16} /> {course.format}</span>
              <span><Layers3 size={16} /> {course.duration}</span>
              <span className="pill-status"><Clock3 size={16} /> In preparation</span>
            </div>
          </div>
        </section>

        <section className="section section-tight">
          <div className="container detail-layout">
            <div>
              <div className="panel" data-reveal>
                <h2 className="panel-title">What you’ll learn</h2>
                <ul className="outcome-list">{course.outcomes.map((o) => <li key={o}><CheckCircle2 size={18} />{o}</li>)}</ul>
              </div>
              <div className="panel" data-reveal>
                <h2 className="panel-title">Planned curriculum</h2>
                <ol className="module-list">
                  {course.modules.map((m, i) => <li key={m}><span>{String(i + 1).padStart(2, "0")}</span>{m}</li>)}
                </ol>
              </div>
              <div className="panel" data-reveal>
                <h2 className="panel-title">Frequently asked</h2>
                <details className="faq"><summary>Do I need prior experience?</summary><p>No. Lessons start from the basics with beginner-friendly explanations and build up step by step.</p></details>
                <details className="faq"><summary>How are classes delivered?</summary><p>The plan is a mix of self-paced lessons and live sessions, with exercises and project-based practice.</p></details>
                <details className="faq"><summary>When does enrolment open?</summary><p>Learning materials, schedules, pricing and enrolment will be added once the curriculum is ready. Ask on WhatsApp to be notified.</p></details>
              </div>
            </div>
            <aside className="sticky-card" data-reveal="right">
              <p className="status-label">Course preparation</p>
              <h3 className="card-title">Be first to know</h3>
              <p className="card-copy">This course is listed as planned. Get in touch to register interest and hear when it launches.</p>
              <a className="btn-primary btn-block" href={ask} target="_blank" rel="noreferrer">Ask about this course <ArrowUpRight size={18} /></a>
              <Link className="btn-secondary btn-block" href="/#contact">Send a message</Link>
            </aside>
          </div>
        </section>

        <section className="section section-soft">
          <div className="container">
            <h2 className="section-title" data-reveal>Explore more courses</h2>
            <div className="course-grid" style={{ marginTop: 28 }}>{related.map((c, i) => <CourseCard key={c.slug} course={c} index={i} />)}</div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
