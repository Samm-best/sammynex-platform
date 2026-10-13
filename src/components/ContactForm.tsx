"use client";
import { useState } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      // Posts to the static skeleton so Netlify Forms handles it (not the Next.js server)
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(new FormData(form) as unknown as Record<string, string>).toString(),
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="contact-form form-success">
        <CheckCircle2 size={48} />
        <h3>Message sent!</h3>
        <p>Thanks for reaching out — Sammy will get back to you soon.</p>
        <button className="btn-secondary" onClick={() => setStatus("idle")}>Send another message</button>
      </div>
    );
  }

  return (
    <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={onSubmit} className="contact-form">
      <input type="hidden" name="form-name" value="contact" />
      <p hidden><label>Don’t fill this out: <input name="bot-field" /></label></p>
      <div className="field-row">
        <label className="field"><span>Your name</span><input name="name" required autoComplete="name" placeholder="Jane Doe" /></label>
        <label className="field"><span>Email</span><input name="email" type="email" required autoComplete="email" placeholder="you@example.com" /></label>
      </div>
      <label className="field"><span>What can Sammy help with?</span>
        <select name="topic" defaultValue="Website project">
          <option>Website project</option>
          <option>Programming / automation</option>
          <option>Course or training</option>
          <option>Collaboration</option>
          <option>Opportunity</option>
          <option>Something else</option>
        </select>
      </label>
      <label className="field"><span>Message</span><textarea name="message" required rows={5} placeholder="Tell me a little about your idea…" /></label>
      <button type="submit" className="btn-primary btn-block" disabled={status === "sending"}>
        {status === "sending" ? <><Loader2 size={18} className="spin" /> Sending…</> : <>Send message <Send size={17} /></>}
      </button>
      {status === "error" && <p className="form-error" role="alert">Something went wrong. Please try again, or reach out on WhatsApp or email.</p>}
    </form>
  );
}
