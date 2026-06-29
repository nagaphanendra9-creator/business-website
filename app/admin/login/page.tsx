"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginPage() {

  const router = useRouter();

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  async function login(){

    const result = await signIn(
      "credentials",
      {
        email,
        password,
        redirect:false
      }
    );

    if(result?.ok){
      router.push("/admin");
    } else {
      alert("Wrong login");
    }
  }

  return(
    <div style={{padding:"40px"}}>

      <h1>Owner Login</h1>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
      />

      <br/><br/>

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
      />

      <br/><br/>

      <button onClick={login}>
        Login
      </button>

    </div>
  );
}