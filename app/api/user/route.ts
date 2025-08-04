import { redirect } from "next/dist/server/api-utils";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const form = await req.formData();
    const name = form.get("form_name");

    console.log(`Received name: ${name}`);

    // Redirects back to the main page
    return NextResponse.redirect(new URL("/", req.url));
}