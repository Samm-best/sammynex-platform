"use client";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";

const photos = [
  { src: "/images/sammynex-profile.jpg", w: 945, h: 1199, alt: "Sammy in a SammyNex branded shirt", caption: "The SammyNex brand" },
  { src: "/images/sammy-full-body.jpg", w: 584, h: 1024, alt: "Sammy standing in a formal black suit", caption: "Studio — full look" },
  { src: "/images/sammy-portrait.jpg", w: 949, h: 1024, alt: "Professional headshot of Sammy in a suit", caption: "Professional portrait" },
];

export default function Gallery() {
  const [open, setOpen] = useState<number | null>(null);
  const close = useCallback(() => setOpen(null), []);
  const step = useCallback((d: number) => setOpen((i) => (i === null ? i : (i + d + photos.length) % photos.length)), []);

  useEffect(() => {
    if (open === null) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKey); };
  }, [open, close, step]);

  return (
    <>
      <div className="gallery-grid">
        {photos.map((p, i) => (
          <button key={p.src} className={`gallery-item g-${i}`} onClick={() => setOpen(i)} data-reveal style={{ transitionDelay: `${i * 110}ms` }} aria-label={`View ${p.caption}`}>
            <Image src={p.src} alt={p.alt} width={p.w} height={p.h} sizes="(max-width: 650px) 90vw, 33vw" />
            <span className="gallery-caption">{p.caption}<Expand size={16} /></span>
          </button>
        ))}
      </div>
      {open !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={photos[open].caption} onClick={close}>
          <button className="lb-btn lb-close" aria-label="Close" onClick={close}><X size={22} /></button>
          <button className="lb-btn lb-prev" aria-label="Previous photo" onClick={(e) => { e.stopPropagation(); step(-1); }}><ChevronLeft size={26} /></button>
          <figure key={open} onClick={(e) => e.stopPropagation()}>
            <Image src={photos[open].src} alt={photos[open].alt} width={photos[open].w} height={photos[open].h} sizes="90vw" />
            <figcaption>{photos[open].caption} · {open + 1}/{photos.length}</figcaption>
          </figure>
          <button className="lb-btn lb-next" aria-label="Next photo" onClick={(e) => { e.stopPropagation(); step(1); }}><ChevronRight size={26} /></button>
        </div>
      )}
    </>
  );
}
