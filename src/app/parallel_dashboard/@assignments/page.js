import wait from "@/lib/wait";

export default async function AssignmentsPage() {
  await wait(3000);
  
  return (
    <div className="text-xl p-4 border border-gray-200 rounded h-[300px] flex items-center">
      ASSIGNMENTS
    </div>
  );
}
