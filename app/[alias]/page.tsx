import getAlias from "@/lib/getAlias";
import { redirect } from "next/navigation";

//lab

export default async function AliasPage({
  params,
}: {
  params: Promise<{ alias: string }>;
}) {
  const { alias } = await params;
  const data = await getAlias(alias);


  if (data) {
    redirect(data.url);
  }


  redirect("/"); // redirects back to homepage 
}
