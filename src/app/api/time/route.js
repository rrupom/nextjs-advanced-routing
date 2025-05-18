export const dymanic = "force-dynamic";

export async function GET() {
  return new Response(new Date().toLocaleTimeString());
}
