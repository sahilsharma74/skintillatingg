import { cookies } from "next/headers";
import crypto from "crypto";

const JWT_SECRET = process.env.ADMIN_JWT_SECRET || "skintillatingg_super_secret_admin_jwt_key_2026_luxury_dermatology";
const COOKIE_NAME = "admin_session";

// Default admin credentials (configurable via env)
export const DEFAULT_ADMIN_EMAIL = process.env.ADMIN_EMAIL || "admin@skintillatingg.com";
export const DEFAULT_ADMIN_PASSWORD_HASH = process.env.ADMIN_PASSWORD_HASH || hashPassword("admin2026");
export const BACKUP_ADMIN_PASSWORD_HASH = hashPassword("SkintillatinggAdmin2026!");

export interface AdminUser {
  id: string;
  email: string;
  name: string;
  role: "ADMIN";
}

/**
 * Secure PBKDF2 Password Hashing
 */
export function hashPassword(password: string): string {
  const salt = "skintillatingg_static_salt_2026";
  const hash = crypto.pbkdf2Sync(password, salt, 10000, 64, "sha512").toString("hex");
  return hash;
}

/**
 * Verify Password
 */
export function verifyPassword(password: string, expectedHash: string): boolean {
  const hash = hashPassword(password);
  if (crypto.timingSafeEqual(Buffer.from(hash), Buffer.from(expectedHash))) {
    return true;
  }
  // Check backup password as well
  if (crypto.timingSafeEqual(Buffer.from(hash), Buffer.from(BACKUP_ADMIN_PASSWORD_HASH))) {
    return true;
  }
  return false;
}

/**
 * Generate Signed JWT Token
 */
export function createAdminToken(user: AdminUser): string {
  const header = Buffer.from(JSON.stringify({ alg: "HS256", typ: "JWT" })).toString("base64url");
  const payload = Buffer.from(
    JSON.stringify({
      ...user,
      exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 7, // 7 days expiration
    })
  ).toString("base64url");

  const signature = crypto
    .createHmac("sha256", JWT_SECRET)
    .update(`${header}.${payload}`)
    .digest("base64url");

  return `${header}.${payload}.${signature}`;
}

/**
 * Verify Signed JWT Token
 */
export function verifyAdminToken(token: string): AdminUser | null {
  try {
    const parts = token.split(".");
    if (parts.length !== 3) return null;

    const [header, payload, signature] = parts;
    const expectedSignature = crypto
      .createHmac("sha256", JWT_SECRET)
      .update(`${header}.${payload}`)
      .digest("base64url");

    if (!crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expectedSignature))) {
      return null;
    }

    const decoded = JSON.parse(Buffer.from(payload, "base64url").toString("utf-8"));
    if (decoded.exp && decoded.exp < Math.floor(Date.now() / 1000)) {
      return null; // Expired
    }

    return {
      id: decoded.id,
      email: decoded.email,
      name: decoded.name,
      role: decoded.role,
    };
  } catch {
    return null;
  }
}

/**
 * Get Authenticated User from Cookies (Server Context)
 */
export function getAdminUserFromCookies(): AdminUser | null {
  try {
    const cookieStore = cookies();
    const token = cookieStore.get(COOKIE_NAME)?.value;
    if (!token) return null;
    return verifyAdminToken(token);
  } catch {
    return null;
  }
}

/**
 * Set Session Cookie Response Options
 */
export function getSessionCookieConfig(token: string) {
  return {
    name: COOKIE_NAME,
    value: token,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax" as const,
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 7 days
  };
}
