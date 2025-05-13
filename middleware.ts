import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const publicPaths = ["/api/webhooks/clerk", "/api/webhooks/stripe"];

const isPublic = (path: string) => {
  return publicPaths.some((x) => path.startsWith(x));
};

export default function middleware(request: NextRequest) {
  if (isPublic(request.nextUrl.pathname)) {
    return NextResponse.next();
  }
  return clerkMiddleware()(request);
}

export const config = {
  matcher: [
    // Skip Next.js internals and all static files
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Match all API routes except webhooks
    "/api/:path*",
    "/trpc/(.*)",
  ],
};
