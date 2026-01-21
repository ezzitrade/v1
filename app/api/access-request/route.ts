import { NextResponse } from "next/server";

type AccessPayload = {
  wallet?: string;
  email?: string;
  role?: string;
  note?: string;
};

function safeStr(v: unknown, max = 500): string {
  if (!v) return "";
  const s = String(v);
  return s.length > max ? s.slice(0, max) + "…" : s;
}

function maskWallet(wallet: string) {
  const w = wallet.trim();
  if (w.length <= 12) return w;
  return `${w.slice(0, 6)}…${w.slice(-4)}`;
}

export async function POST(req: Request) {
  let body: AccessPayload = {};
  try {
    body = (await req.json()) as AccessPayload;
  } catch {
    // ignore
  }

  const payload: AccessPayload = {
    wallet: safeStr(body.wallet, 200),
    email: safeStr(body.email, 200),
    role: safeStr(body.role, 80) || "Unknown",
    note: safeStr(body.note, 500),
  };

  if (!payload.wallet && !payload.email) {
    return NextResponse.json(
      { ok: false, error: "wallet_or_email_required" },
      { status: 400 }
    );
  }

  const webhookUrl = process.env.EZZI_ACCESS_WEBHOOK_URL;
  if (webhookUrl) {
    const now = new Date();
    const embed = {
      title: "New Access Request — EZZI.trade",
      description: "Private access request submitted from landing page.",
      color: 0x06b6d4,
      timestamp: now.toISOString(),
      fields: [
        { name: "Role", value: payload.role || "Unknown", inline: true },
        {
          name: "Wallet",
          value: payload.wallet ? maskWallet(payload.wallet) : "—",
          inline: true,
        },
        { name: "Email", value: payload.email || "—", inline: true },
        { name: "Note", value: payload.note || "—", inline: false },
      ],
      footer: { text: "EZZI.trade • Access Requests" },
    };

    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: "EZZI Access",
          embeds: [embed],
        }),
      });
    } catch {
      // don't fail the request if Discord is down/misconfigured
    }
  }

  return NextResponse.json({ ok: true });
}
