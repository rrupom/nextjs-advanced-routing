import { headers, cookies } from "next/headers";

export async function GET(request) {
  const requestHeaders = new Headers(request.headers);
  const headerList = await headers();
  const cookiesList = await cookies();

  cookiesList.set("page", "2");
  console.log(cookiesList.get("page"));
  console.log(headerList.get("Authorization"));
  console.log(request.cookies.get("theme"));

  return new Response("Profile API", {
    headers: {
      "Set-Cookie": "theme=dark",
    },
  });
}
