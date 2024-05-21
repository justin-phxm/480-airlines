import { getServerAuthSession } from "~/server/auth";

export default async function Heading() {
  const session = await getServerAuthSession();
  return <h1 className=" text-xl font-bold">Welcome, {session?.user.name}</h1>;
}
