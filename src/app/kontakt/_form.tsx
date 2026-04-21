"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Send, CheckCircle2, Loader2 } from "lucide-react";

type Status = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") || ""),
      email: String(data.get("email") || ""),
      phone: String(data.get("phone") || ""),
      message: String(data.get("message") || ""),
      consent: data.get("consent") === "on",
    };

    if (!payload.name || !payload.consent) {
      setStatus("error");
      setErrorMsg("Bitte füllen Sie alle erforderlichen Felder aus.");
      return;
    }

    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Fehler beim Senden");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMsg("Das hat leider nicht geklappt – bitte versuchen Sie es erneut.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <Field label="Name" name="name" required />
      <div className="grid md:grid-cols-2 gap-5">
        <Field label="E-Mail" name="email" type="email" />
        <Field label="Telefon (optional)" name="phone" type="tel" />
      </div>
      <Field label="Nachricht" name="message" textarea />

      <label className="flex items-start gap-3 text-sm text-[var(--cream-200)]/80 pt-2">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-1 h-4 w-4 rounded border-[var(--cream-200)]/40 bg-transparent accent-[var(--gold-500)]"
        />
        <span>
          Ich bin damit einverstanden, dass diese Daten zum Zwecke der
          Kontaktaufnahme gespeichert und verarbeitet werden. Mir ist bekannt,
          dass ich meine Einwilligung jederzeit widerrufen kann.
        </span>
      </label>

      <div className="pt-4">
        <AnimatePresence mode="wait">
          {status === "success" ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-3 rounded-full bg-[var(--gold-400)]/15 border border-[var(--gold-400)]/40 px-6 py-4 text-[var(--gold-400)]"
            >
              <CheckCircle2 size={20} />
              Danke! Wir haben Ihre Nachricht erhalten und melden uns zeitnah.
            </motion.div>
          ) : (
            <motion.button
              key="submit"
              type="submit"
              disabled={status === "sending"}
              whileHover={{ scale: 1.015 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 bg-[var(--gold-500)] text-[var(--espresso-900)] font-medium tracking-wide hover:bg-[var(--gold-400)] transition-colors disabled:opacity-60 disabled:cursor-not-allowed min-w-[180px]"
            >
              {status === "sending" ? (
                <>
                  <Loader2 size={16} className="animate-spin" /> Wird gesendet…
                </>
              ) : (
                <>
                  Senden <Send size={15} />
                </>
              )}
            </motion.button>
          )}
        </AnimatePresence>

        {status === "error" && errorMsg && (
          <p className="mt-4 text-sm text-[#f2b8b8]">{errorMsg}</p>
        )}
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  textarea,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  textarea?: boolean;
}) {
  const [focused, setFocused] = useState(false);

  const base =
    "peer w-full rounded-2xl bg-[var(--cream-100)]/5 text-[var(--cream-100)] border border-[var(--cream-200)]/20 focus:border-[var(--gold-400)] outline-none px-5 pt-7 pb-3 placeholder-transparent transition-colors";

  return (
    <div className="relative">
      {textarea ? (
        <textarea
          id={name}
          name={name}
          rows={5}
          placeholder={label}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={base + " resize-y min-h-[140px]"}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          required={required}
          placeholder={label}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={base}
        />
      )}
      <label
        htmlFor={name}
        className={`absolute left-5 top-5 origin-left text-[var(--cream-200)]/70 pointer-events-none transition-all duration-300 ${
          focused
            ? "scale-75 -translate-y-3 text-[var(--gold-400)]"
            : "peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:text-[var(--gold-400)]"
        }`}
      >
        {label}
        {required && <span className="text-[var(--gold-400)] ml-0.5">*</span>}
      </label>
    </div>
  );
}
