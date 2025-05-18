import { NextResponse } from "next/server";

export function middleware(request, event) {
  event.waitUntil(setTimeout(() => console.log("Done!"), 3000));

  return NextResponse.next();
}

export const config = {
  matcher: ["/"],
};
