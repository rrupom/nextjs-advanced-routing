import { data } from "@/app/locale/data";

export default async function Contact({ params }) {
  const { lang } = await params;
  const content = data["contact"][lang];
  return (
    <div className="text-3xl font-bold h-[400px] flex items-center justify-center">
      {content}
    </div>
  );
}
