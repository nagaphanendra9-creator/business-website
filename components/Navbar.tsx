"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      style={{
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        padding:"12px 20px",
        background:"#fff",
        flexWrap:"wrap",
        position:"sticky",
        top:0,
        zIndex:1000
      }}
    >
      <div
        style={{
          display:"flex",
          alignItems:"center",
          gap:"10px"
        }}
      >
        <img
          src="/logo.png"
          width={50}
          height={50}
          style={{
            borderRadius:"10px",
            objectFit:"cover"
          }}
        />

        <h2 style={{margin:0}}>
          My Business
        </h2>
      </div>

      <div
        style={{
          display:"flex",
          gap:"15px",
          flexWrap:"wrap",
          fontSize:"14px"
        }}
      >
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/login">Owner Login</Link>
      </div>
    </nav>
  );
}