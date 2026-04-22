import { NextResponse } from "next/server";

type ApplyPayload = {
  role: "EMS" | "PD" | "MECH";
  answers: Array<{ question: string; answer: string }>;
};

export async function POST(request: Request) {
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
  if (!webhookUrl) {
    return NextResponse.json({ error: "Webhook not configured." }, { status: 500 });
  }

  let payload: ApplyPayload;
  try {
    payload = (await request.json()) as ApplyPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON payload." }, { status: 400 });
  }

  const { role, answers } = payload;
  if (!role || !answers || answers.length === 0) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const embedFields = [
    { name: "Role", value: role, inline: true },
    ...answers.map((item) => ({
      name: item.question,
      value: item.answer?.trim() ? item.answer : "Not provided",
      inline: false
    }))
  ];

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      username: "DSTRTO CITY Whitelist",
      embeds: [
        {
          title: "New Whitelist Application",
          color: 43775,
          fields: embedFields,
          timestamp: new Date().toISOString()
        }
      ]
    })
  });

  if (!response.ok) {
    return NextResponse.json({ error: "Webhook delivery failed." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
