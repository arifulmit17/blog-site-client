import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { cookies } from "next/headers";


export default async function Home() {
  const session= await authClient.getSession()
  const cookieStore= await cookies()
  console.log(cookies);

  const res=await fetch("http://localhost:3000/api/auth/get-session",{
    headers:{
      Cookie:cookieStore.toString()
    }
  })
  const sess= res.json()
  console.log(sess );
  return (
    <div >
      <Button>Click here</Button>
    </div>
  );
}
