import { NextRequest, NextResponse } from "next/server";
import { createHash } from "node:crypto";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const META_GRAPH_API_VERSION = "v22.0";

function hashValue(value: string) {
  return createHash("sha256").update(value.trim().toLowerCase()).digest("hex");
}

async function sendMetaLeadEvent({
  email,
  eventId,
  request,
}: {
  email: string;
  eventId?: string;
  request: NextRequest;
}) {
  const pixelId = process.env.META_PIXEL_ID;
  const accessToken = process.env.META_ACCESS_TOKEN;

  if (!pixelId || !accessToken || !eventId) {
    return;
  }

  const userAgent = request.headers.get("user-agent") ?? undefined;
  const forwardedFor = request.headers.get("x-forwarded-for");
  const clientIpAddress = forwardedFor?.split(",")[0]?.trim();
  const fbp = request.cookies.get("_fbp")?.value;
  const fbc = request.cookies.get("_fbc")?.value;
  const testEventCode = process.env.META_TEST_EVENT_CODE;

  const payload = {
    data: [
      {
        event_name: "Lead",
        event_time: Math.floor(Date.now() / 1000),
        action_source: "website",
        event_source_url: request.nextUrl.origin,
        event_id: eventId,
        user_data: {
          em: hashValue(email),
          client_ip_address: clientIpAddress,
          client_user_agent: userAgent,
          fbp,
          fbc,
        },
        custom_data: {
          content_name: "Sauna Hat Waitlist",
          content_category: "Waitlist",
        },
      },
    ],
    test_event_code: testEventCode,
  };

  const metaResponse = await fetch(
    `https://graph.facebook.com/${META_GRAPH_API_VERSION}/${pixelId}/events`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...payload,
        access_token: accessToken,
      }),
    }
  );

  if (!metaResponse.ok) {
    console.error("Meta Conversions API error:", metaResponse.status, await metaResponse.text());
  }
}

export async function POST(request: NextRequest) {
  try {
    const { email, eventId } = await request.json();

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "Email is required." },
        { status: 400 }
      );
    }

    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (eventId && typeof eventId !== "string") {
      return NextResponse.json(
        { error: "Invalid event ID." },
        { status: 400 }
      );
    }

    const loopsApiKey = process.env.LOOPS_API_KEY;
    const mailingListId = process.env.LOOPS_MAILING_LIST_ID;

    if (!loopsApiKey || !mailingListId) {
      console.error("Missing LOOPS_API_KEY or LOOPS_MAILING_LIST_ID env vars");
      return NextResponse.json(
        { error: "Something went wrong. Please try again." },
        { status: 500 }
      );
    }

    const loopsRes = await fetch("https://app.loops.so/api/v1/contacts/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${loopsApiKey}`,
      },
      body: JSON.stringify({
        email,
        source: "waitlist",
        mailingLists: { [mailingListId]: true },
      }),
    });

    if (loopsRes.status === 409) {
      await sendMetaLeadEvent({ email, eventId, request });
      return NextResponse.json({ success: true });
    }

    if (!loopsRes.ok) {
      console.error("Loops API error:", loopsRes.status, await loopsRes.text());
      return NextResponse.json(
        { error: "Something went wrong. Please try again." },
        { status: 500 }
      );
    }

    await sendMetaLeadEvent({ email, eventId, request });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
