"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function login() {
    if (username === "admin" && password === "123456") {
      localStorage.setItem("owner", "true");

      router.replace("/admin");
    } else {
      alert("Wrong username or password");
    }
  }

  return (
    <div style={{ padding: "40px" }}>
      <h1>Owner Login</h1>

      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />

      <br /><br />

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />

      <br /><br />

      <button onClick={login}>
        Login
      </button>
    </div>
  );
}
