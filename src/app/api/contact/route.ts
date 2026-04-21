import { NextResponse } from "next/server";

export const runtime = "nodejs";

type Payload = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  consent?: boolean;
};

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ ok: false, error: "bad_json" }, { status: 400 });
  }

  const { name, consent, message = "", email = "", phone = "" } = body;
  if (!name || !consent) {
    return NextResponse.json(
      { ok: false, error: "missing_fields" },
      { status: 400 }
    );
  }

  // Honeypot-ish check: absurdly long messages are rejected.
  if (message.length > 5000) {
    return NextResponse.json({ ok: false, error: "too_long" }, { status: 400 });
  }

  // Log receipt. In production, wire this up to an email provider (Resend, Postmark, …)
  // or a CRM via an environment variable.
  console.log("[contact] received", {
    name,
    email,
    phone,
    message: message.slice(0, 200),
    at: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
