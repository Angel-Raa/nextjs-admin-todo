import { authHandler } from "@/app/api/auth/[...nextauth]/route";
import { WidgetItem } from "@/app/components";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const session: { user?: { name?: string } } | null = await getServerSession(authHandler);
  if (!session) {
    redirect("/api/auth/signin");
  }

  console.log({ session });

  return (
    <>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
        <WidgetItem title="Usuario conectado S-side">
          <div className="flex flex-col">
            <span>{session.user?.name}</span>

          </div>
        </WidgetItem>
      </div>
    </>
  );
}
