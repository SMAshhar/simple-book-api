// middleware.ts
import { NextResponse } from "next/server";
import { verifyAuth } from "./lib/auth";

// This function can be marked `async` if using `await` inside
export async function middleware(request: Request) {
  try {
    const token = request.headers.get("authorization")?.split(" ")[1];
    const host = request.headers.get("host")!;

    if (!token) {
      return NextResponse.json({ message: "UNAUTHORIZED" });
    }
    // console.log(token);

    const verifiedToken = await verifyAuth(token, host);
    // console.log(verifiedToken.payload);

    const headers = new Headers(request.headers);
    headers.set("userEmail", JSON.stringify(verifiedToken));

    return NextResponse.next({ headers });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: err });
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/api/orders/:path*",
};
