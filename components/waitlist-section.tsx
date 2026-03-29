"use client";

import { useState } from "react";

export default function WaitlistSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setMessage("You're on the list. We'll be in touch.");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  }

  return (
    <section id="waitlist" className="bg-cream px-6 py-16 text-center">
      <div>
        <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-warm-brown mb-4">
          Join the ritual
        </p>

        <h2 className="font-serif text-[26px] font-normal leading-[1.25] text-charcoal mb-3">
          Better sessions start here
        </h2>

        <p className="text-sm font-light text-warm-brown leading-[1.7] mb-8 max-w-[300px] mx-auto">
          Be first to shop when we launch. Early access, limited first run.
        </p>

        {status === "success" ? (
          <div className="max-w-[320px] mx-auto">
            <div className="w-10 h-[1px] bg-warm-brown/30 mx-auto mb-6" />
            <p className="font-serif text-lg text-charcoal mb-2">
              You&apos;re on the list
            </p>
            <p className="text-sm font-light text-warm-brown leading-[1.7]">
              We&apos;ll reach out when the next run is ready. Until then, thanks for believing in better rituals.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-[320px] mx-auto">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="w-full px-4 py-3.5 bg-off-white border-none text-sm font-light text-charcoal placeholder:text-warm-brown/50 outline-none focus:ring-1 focus:ring-muted-gold/40"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-charcoal text-off-white px-8 py-3.5 font-sans text-[13px] font-medium tracking-[0.06em] uppercase transition-colors hover:bg-deep-brown disabled:opacity-60"
            >
              {status === "loading" ? "Joining..." : "Join the waitlist"}
            </button>
            {status === "error" && (
              <p className="text-xs font-light text-warm-brown">{message}</p>
            )}
          </form>
        )}
      </div>
    </section>
  );
}
