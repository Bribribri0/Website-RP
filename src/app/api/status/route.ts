import { NextResponse } from "next/server";

const CFX_SINGLE = "https://servers-frontend.fivem.net/api/servers/single";

/** Same listing the FiveM client / server browser uses — live player counts. */
type CfxSingleResponse = {
  EndPoint?: string;
  Data?: {
    clients?: number;
    sv_maxclients?: number;
    svMaxclients?: number;
  };
};

function mockPayload() {
  const players = 48 + Math.floor(Math.random() * 34);
  return {
    online: true,
    players,
    maxPlayers: 128,
    updatedAt: new Date().toISOString(),
    source: "mock" as const
  };
}

export async function GET() {
  const serverId = process.env.CFX_SERVER_ID?.trim();

  if (!serverId) {
    return NextResponse.json(mockPayload());
  }

  try {
    const response = await fetch(`${CFX_SINGLE}/${encodeURIComponent(serverId)}`, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (compatible; DSTRTO-CITY-Status/1.0; +https://dstrtocity.example) Chrome/120.0.0.0"
      },
      cache: "no-store"
    });

    if (!response.ok) {
      const notFound = response.status === 404;
      return NextResponse.json({
        online: false,
        players: 0,
        maxPlayers: 0,
        updatedAt: new Date().toISOString(),
        source: "cfx" as const,
        error: notFound
          ? "Server ID not found on CFX (wrong code or not listed)."
          : `CFX status HTTP ${response.status}.`
      });
    }

    const json = (await response.json()) as CfxSingleResponse;
    const data = json.Data;

    if (!data || typeof data.clients !== "number") {
      return NextResponse.json({
        online: false,
        players: 0,
        maxPlayers: 0,
        updatedAt: new Date().toISOString(),
        source: "cfx" as const,
        error: "Unexpected CFX response shape."
      });
    }

    const maxPlayers = data.sv_maxclients ?? data.svMaxclients ?? 0;

    return NextResponse.json({
      online: true,
      players: data.clients,
      maxPlayers: maxPlayers > 0 ? maxPlayers : 32,
      updatedAt: new Date().toISOString(),
      source: "cfx" as const
    });
  } catch {
    return NextResponse.json({
      online: false,
      players: 0,
      maxPlayers: 0,
      updatedAt: new Date().toISOString(),
      source: "cfx" as const,
      error: "Failed to reach CFX status API."
    });
  }
}
