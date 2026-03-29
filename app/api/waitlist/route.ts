import { NextRequest, NextResponse } from "next/server";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

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
      return NextResponse.json({ success: true });
    }

    if (!loopsRes.ok) {
      console.error("Loops API error:", loopsRes.status, await loopsRes.text());
      return NextResponse.json(
        { error: "Something went wrong. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
