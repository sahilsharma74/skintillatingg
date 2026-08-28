import { NextResponse } from "next/server";
import { getAdminUserFromCookies } from "@/lib/auth";
import { revertPageVersion } from "@/lib/cms/cmsStore";

export async function POST(request: Request) {
  const user = getAdminUserFromCookies();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { pageId } = body;

    if (!pageId) {
      return NextResponse.json({ error: "pageId is required" }, { status: 400 });
    }

    const reverted = revertPageVersion(pageId);
    if (!reverted) {
      return NextResponse.json(
        { error: "No previous version available to restore." },
        { status: 400 }
      );
    }

    return NextResponse.json({ success: true, page: reverted });
  } catch (error) {
    return NextResponse.json({ error: "Failed to revert page" }, { status: 500 });
  }
}
