import { UserButton } from "@clerk/nextjs";
//import { api } from "~/utils/api";

export default function Home() {
  // const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <div>
        <h1>Home</h1>
        <UserButton />
      </div>
    </>
  );
}
