import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BookOpen, Blocks, BriefcaseBusiness, Cloud, Code2, Database, Github, GraduationCap, Laptop, Mail, MessageCircle, Rocket, Server, Sparkles, Terminal, Twitter } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroPhoto from "@/components/HeroPhoto";
import TypeRotator from "@/components/TypeRotator";
import Counter from "@/components/Counter";
import Gallery from "@/components/Gallery";
import ContactForm from "@/components/ContactForm";
import { CourseCard } from "@/components/CourseExplorer";
import { contact, courses, journey, projects, services } from "@/lib/data";

const skillCards = [
  { icon: Code2, title: "Programming", copy: "Python, Java and C++ foundations built through practice and projects.", level: 80 },
  { icon: Laptop, title: "Web development", copy: "Frontend interfaces and backend concepts for useful web experiences.", level: 72 },
  { icon: Database, title: "SQL & databases", copy: "Relational data, queries, database design and application integration.", level: 70 },
  { icon: Cloud, title: "Cloud & DevOps", copy: "An active learning path focused on cloud engineering and delivery workflows.", level: 45 },
];
const stack = ["Python", "Java", "C++", "HTML", "CSS", "JavaScript", "React", "Node.js", "SQL", "MySQL", "Git", "GitHub", "Cloud", "DevOps", "AI automation"];
const serviceIcons = [Laptop, Server, Terminal, Database, GraduationCap, Cloud];
const projectIcons = [Terminal, Blocks, Database];

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* HERO */}
        <section className="hero">
          <div className="hero-bg" aria-hidden><span className="blob b1" /><span className="blob b2" /><span className="blob b3" /><span className="hero-grid" /></div>
          <div className="container hero-layout">
            <div className="hero-text">
              <div className="eyebrow load-in" style={{ animationDelay: "60ms" }}><span className="pulse-dot" /> Available for projects & training</div>
              <h1 className="load-in" style={{ animationDelay: "160ms" }}>Bringing ideas <span className="gradient-text">into a reality.</span></h1>
              <p className="hero-typed load-in" style={{ animationDelay: "260ms" }}>I build <TypeRotator words={["websites", "Python tools", "databases", "web apps", "learning paths"]} /></p>
              <p className="hero-copy load-in" style={{ animationDelay: "340ms" }}>I’m Sammy — a Computer Science student and aspiring software developer. I’m building practical projects, growing my engineering skills, and creating a space where people can learn, build, and grow with technology.</p>
              <div className="hero-actions load-in" style={{ animationDelay: "440ms" }}>
                <Link href="#projects" className="btn-primary">Explore my work <ArrowUpRight size={18} /></Link>
                <Link href="/courses" className="btn-ghost">Explore learning <BookOpen size={18} /></Link>
              </div>
              <div className="hero-stats load-in" style={{ animationDelay: "540ms" }}>
                <div><strong><Counter to={3} />+</strong><span>Languages</span></div>
                <div><strong><Counter to={courses.length} /></strong><span>Courses planned</span></div>
                <div><strong><Counter to={services.length} /></strong><span>Services</span></div>
              </div>
            </div>
            <HeroPhoto />
          </div>
          <a href="#about" className="scroll-cue" aria-label="Scroll to about"><span /></a>
        </section>

        {/* MARQUEE */}
        <div className="marquee" aria-label="Technologies">
          <div className="marquee-track">{[...stack, ...stack].map((s, i) => <span key={i} aria-hidden={i >= stack.length}>{s}<Sparkles size={14} /></span>)}</div>
        </div>

        {/* ABOUT */}
        <section id="about" className="section">
          <div className="container about-layout">
            <div className="about-visual" data-reveal="left">
              <div className="about-frame">
                <Image className="about-photo" src="/images/sammy-full-body.jpg" alt="Sammy in a formal black suit in a studio" width={584} height={1024} sizes="(max-width: 650px) 80vw, 380px" />
              </div>
              <div className="about-badge"><Rocket size={18} /><div><strong>Learning in public</strong><span>Building as I go</span></div></div>
            </div>
            <div data-reveal="right">
              <p className="section-kicker">A little about me</p>
              <h2 className="section-title">A student mindset.<br />A builder’s approach.</h2>
              <p className="section-intro">I’m studying Computer Science at AE-FUNAI and developing through coursework, personal practice, and hands-on projects. I enjoy breaking problems down, learning how systems work, and turning ideas into useful digital experiences.</p>
              <p className="section-intro">My current skills include Python, Java, C++, frontend and backend web development, SQL, and Git/GitHub. I’m also working toward stronger skills in cloud engineering, DevOps, AI automation, and AI engineering — learning in public and building as I go.</p>
              <div className="timeline">
                {journey.map((j, i) => (
                  <div className="timeline-item" key={j.title} data-reveal style={{ transitionDelay: `${i * 90}ms` }}>
                    <span className="timeline-label">{j.label}</span>
                    <div><h3>{j.title}</h3><p>{j.text}</p></div>
                  </div>
                ))}
              </div>
              <div className="hero-actions">
                <a className="btn-primary" href={`mailto:${contact.email}`}>Get in touch <ArrowUpRight size={18} /></a>
                <a className="btn-secondary" href={contact.github} target="_blank" rel="noreferrer"><Github size={18} /> GitHub profile</a>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section section-dark">
          <div className="container">
            <div className="section-head" data-reveal>
              <p className="section-kicker">What I’m building with</p>
              <h2 className="section-title">Skills that keep growing.</h2>
              <p className="section-intro">A practical foundation with room to keep learning, experimenting, and improving.</p>
            </div>
            <div className="skill-grid">
              {skillCards.map(({ icon: Icon, title, copy, level }, i) => (
                <article className="skill-card" key={title} data-reveal style={{ transitionDelay: `${i * 90}ms` }}>
                  <div className="icon-tile"><Icon size={23} /></div>
                  <h3 className="card-title">{title}</h3>
                  <p className="card-copy">{copy}</p>
                  <div className="meter" aria-label={`${title}: ${level < 50 ? "currently learning" : "growing"}`}><span style={{ ["--w" as string]: `${level}%` }} /></div>
                  <p className="meter-label">{level < 50 ? "Currently learning" : "Growing strong"}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section">
          <div className="container">
            <div className="section-head" data-reveal>
              <p className="section-kicker">Portfolio</p>
              <h2 className="section-title">Projects, practice & progress.</h2>
              <p className="section-intro">A growing collection of learning projects and experiments. Each item will be expanded with screenshots, technologies, challenges, and source links as the work is ready to share.</p>
            </div>
            <div className="project-grid">
              {projects.map((p, i) => {
                const Icon = projectIcons[i] || Code2;
                return (
                  <article key={p.title} className="project-card" data-reveal style={{ transitionDelay: `${i * 100}ms` }}>
                    <div className={`project-art art-${i}`}><div className="code-window" aria-hidden><i /><i /><i /></div><Icon size={52} strokeWidth={1.4} /></div>
                    <div className="project-body">
                      <p className="status-label">{p.status}</p>
                      <h3 className="card-title">{p.title}</h3>
                      <p className="card-copy">{p.text}</p>
                      <div className="tag-row">{p.tags.map((t) => <span key={t}>{t}</span>)}</div>
                    </div>
                  </article>
                );
              })}
            </div>
            <div className="center-cta" data-reveal><a href={contact.github} target="_blank" rel="noreferrer" className="btn-secondary"><Github size={18} /> See code on GitHub</a></div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="section section-soft">
          <div className="container">
            <div className="section-head" data-reveal>
              <p className="section-kicker">Services</p>
              <h2 className="section-title">Let’s make something useful.</h2>
              <p className="section-intro">Support for personal projects, small businesses, students, and teams. Scope and delivery are agreed clearly before work begins.</p>
            </div>
            <div className="service-grid">
              {services.map((s, i) => {
                const Icon = serviceIcons[i] || BriefcaseBusiness;
                return (
                  <article className="service-card" key={s.title} data-reveal style={{ transitionDelay: `${(i % 3) * 90}ms` }}>
                    <span className="service-num">0{i + 1}</span>
                    <div className="icon-tile"><Icon size={22} /></div>
                    <h3 className="card-title">{s.title}</h3>
                    <p className="card-copy">{s.text}</p>
                  </article>
                );
              })}
            </div>
            <div className="process" data-reveal>
              {[["Discuss", "Share your goal and ideas"], ["Plan", "Agree on features, timeline & budget"], ["Build", "Regular updates while it’s made"], ["Deliver", "Launch, handover & support"]].map(([t, d], i) => (
                <div key={t} className="process-step"><span>{i + 1}</span><strong>{t}</strong><p>{d}</p></div>
              ))}
            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section id="gallery" className="section">
          <div className="container">
            <div className="section-head" data-reveal>
              <p className="section-kicker">Gallery</p>
              <h2 className="section-title">The face behind SammyNex.</h2>
              <p className="section-intro">Tap any photo to view it in full.</p>
            </div>
            <Gallery />
          </div>
        </section>

        {/* COURSES */}
        <section className="section course-feature">
          <div className="container">
            <div className="split-head" data-reveal>
              <div>
                <p className="section-kicker">SammyNex Learn</p>
                <h2 className="section-title">Learn by building real things.</h2>
                <p className="section-intro">Practical learning paths designed to grow from the basics into real projects.</p>
              </div>
              <Link href="/courses" className="btn-primary">Browse all courses <ArrowUpRight size={18} /></Link>
            </div>
            <div className="course-grid" data-reveal>{courses.slice(0, 3).map((c, i) => <CourseCard key={c.slug} course={c} index={i} />)}</div>
            <p className="fine-print">Course pages are currently a starter catalogue; lessons, pricing, and enrolment will be published as each course is prepared.</p>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section section-dark contact-section">
          <div className="container contact-layout">
            <div data-reveal="left">
              <p className="section-kicker">Contact Sammy</p>
              <h2 className="section-title">Have an idea? Let’s talk.</h2>
              <p className="section-intro">Reach out about a website, programming project, training, collaboration, or an opportunity.</p>
              <div className="contact-person">
                <Image src="/images/sammy-portrait.jpg" alt="Headshot of Sammy" width={949} height={1024} sizes="72px" />
                <div><strong>Sammy</strong><span>Open to projects, training &amp; collaboration</span></div>
              </div>
              <div className="contact-actions">
                <a className="contact-link whatsapp" href={contact.whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={18} /> WhatsApp</a>
                <a className="contact-link" href={`mailto:${contact.email}`}><Mail size={18} /> Email</a>
                <a className="contact-link" href={contact.github} target="_blank" rel="noreferrer"><Github size={18} /> GitHub</a>
                <a className="contact-link" href={contact.x} target="_blank" rel="noreferrer"><Twitter size={18} /> X / Twitter</a>
              </div>
            </div>
            <div data-reveal="right"><ContactForm /></div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
