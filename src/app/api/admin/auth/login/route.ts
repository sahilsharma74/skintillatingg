import { NextResponse } from "next/server";
import {
  createAdminToken,
  DEFAULT_ADMIN_EMAIL,
  DEFAULT_ADMIN_PASSWORD_HASH,
  getSessionCookieConfig,
  verifyPassword,
} from "@/lib/auth";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required." },
        { status: 400 }
      );
    }

    const trimmedEmail = String(email).trim().toLowerCase();
    const isValidEmail = trimmedEmail === DEFAULT_ADMIN_EMAIL.toLowerCase() || trimmedEmail === "admin";
    const isValidPassword = verifyPassword(String(password), DEFAULT_ADMIN_PASSWORD_HASH);

    if (!isValidEmail || !isValidPassword) {
      return NextResponse.json(
        { error: "Invalid admin credentials." },
        { status: 401 }
      );
    }

    const adminUser = {
      id: "admin-1",
      email: DEFAULT_ADMIN_EMAIL,
      name: "Dr. Akshaya Jain (Admin)",
      role: "ADMIN" as const,
    };

    const token = createAdminToken(adminUser);
    const cookieConfig = getSessionCookieConfig(token);

    const response = NextResponse.json({
      success: true,
      user: adminUser,
    });

    response.cookies.set(
      cookieConfig.name,
      cookieConfig.value,
      cookieConfig
    );

    return response;
  } catch (error) {
    return NextResponse.json(
      { error: "Authentication failed." },
      { status: 500 }
    );
  }
}
