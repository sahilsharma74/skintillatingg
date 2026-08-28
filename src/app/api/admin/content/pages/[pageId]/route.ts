import { NextResponse } from "next/server";
import { getAdminUserFromCookies } from "@/lib/auth";
import {
  getPagesStore,
  publishPageData,
  savePageData,
} from "@/lib/cms/cmsStore";

export async function GET(
  request: Request,
  { params }: { params: { pageId: string } }
) {
  const pages = getPagesStore();
  const page = pages[params.pageId];

  if (!page) {
    return NextResponse.json({ error: "Page not found" }, { status: 404 });
  }

  return NextResponse.json({ page });
}

// PUT = Save Draft
export async function PUT(
  request: Request,
  { params }: { params: { pageId: string } }
) {
  const user = getAdminUserFromCookies();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { page } = body;

    if (!page || !page.sections) {
      return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
    }

    page.status = "Draft";
    savePageData(params.pageId, page);

    return NextResponse.json({ success: true, page });
  } catch (error) {
    return NextResponse.json({ error: "Failed to save draft" }, { status: 500 });
  }
}

// POST = Publish Page
export async function POST(
  request: Request,
  { params }: { params: { pageId: string } }
) {
  const user = getAdminUserFromCookies();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const published = publishPageData(params.pageId, user.name);
    return NextResponse.json({ success: true, page: published });
  } catch (error) {
    return NextResponse.json({ error: "Failed to publish page" }, { status: 500 });
  }
}
