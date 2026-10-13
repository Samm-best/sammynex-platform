"use client";
import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowUpRight, BookOpen, BriefcaseBusiness, Clock3, Code2, Database, Laptop, Search, Server } from "lucide-react";
import type { Course } from "@/lib/data";

const icons: Record<string, typeof Code2> = { Programming: Code2, "Web Development": Laptop, Databases: Database, Backend: Server, Productivity: BriefcaseBusiness };

export default function CourseExplorer({ courses }: { courses: Course[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const categories = ["All", ...Array.from(new Set(courses.map((c) => c.category)))];

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return courses.filter((c) => (category === "All" || c.category === category) && (!q || `${c.title} ${c.description} ${c.category}`.toLowerCase().includes(q)));
  }, [courses, query, category]);

  return (
    <>
      <div className="explorer-bar">
        <label className="search-box"><Search size={18} /><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search courses…" aria-label="Search courses" /></label>
        <div className="chip-row" role="tablist" aria-label="Filter by category">
          {categories.map((c) => <button key={c} role="tab" aria-selected={category === c} className={`filter-chip${category === c ? " active" : ""}`} onClick={() => setCategory(c)}>{c}</button>)}
        </div>
      </div>
      {filtered.length === 0 ? (
        <div className="empty-state"><BookOpen size={36} /><p>No courses match “{query}”. Try another search.</p></div>
      ) : (
        <div className="course-grid">
          {filtered.map((c, i) => <CourseCard key={c.slug} course={c} index={i} />)}
        </div>
      )}
    </>
  );
}

export function CourseCard({ course: c, index = 0 }: { course: Course; index?: number }) {
  const Icon = icons[c.category] || BookOpen;
  return (
    <Link href={`/courses/${c.slug}`} className="course-card pop-in" style={{ animationDelay: `${index * 70}ms` }}>
      <div className={`course-cover cover-${c.category.split(" ")[0].toLowerCase()}`}><Icon size={40} strokeWidth={1.5} /><span className="cover-tag">{c.duration}</span></div>
      <p className="status-label">{c.category}</p>
      <h3 className="card-title">{c.title}</h3>
      <p className="card-copy">{c.description}</p>
      <div className="course-meta"><Clock3 size={15} />{c.level} · {c.format}</div>
      <span className="card-link">Course overview <ArrowUpRight size={16} /></span>
    </Link>
  );
}
