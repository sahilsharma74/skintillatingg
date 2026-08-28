import { NextResponse } from "next/server";
import { getAdminUserFromCookies } from "@/lib/auth";

export async function GET() {
  const user = getAdminUserFromCookies();
  if (!user) {
    return NextResponse.json({ authenticated: false }, { status: 401 });
  }

  return NextResponse.json({
    authenticated: true,
    user,
  });
}
