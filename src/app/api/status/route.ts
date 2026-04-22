import { NextResponse } from "next/server";

export async function GET() {
  const players = 48 + Math.floor(Math.random() * 34);
  const online = true;

  return NextResponse.json({
    online,
    players,
    maxPlayers: 128,
    updatedAt: new Date().toISOString()
  });
}
