"use client";
import Image from "next/image";
import { useRef } from "react";
import { Code2, Sparkles, GraduationCap } from "lucide-react";

/** Hero portrait with a subtle mouse-follow 3D tilt. */
export default function HeroPhoto() {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty("--rx", `${-y * 8}deg`);
    el.style.setProperty("--ry", `${x * 10}deg`);
  };
  const reset = () => { ref.current?.style.setProperty("--rx", "0deg"); ref.current?.style.setProperty("--ry", "0deg"); };

  return (
    <div className="hero-visual" onMouseMove={onMove} onMouseLeave={reset}>
      <div className="hero-ring" aria-hidden />
      <div className="hero-card" ref={ref}>
        <Image className="hero-photo" src="/images/sammynex-profile.jpg" alt="Sammy wearing a SammyNex branded shirt" width={945} height={1199} sizes="(max-width: 650px) 90vw, 440px" priority />
        <div className="hero-shine" aria-hidden />
      </div>
      <div className="float-chip chip-a"><Code2 size={17} /> Python · Java · C++</div>
      <div className="float-chip chip-b"><GraduationCap size={17} /> CS @ AE-FUNAI</div>
      <div className="float-chip chip-c"><Sparkles size={17} /> Learn • Build • Grow</div>
    </div>
  );
}
