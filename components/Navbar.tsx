import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 40px",
        background: "white",
        boxShadow: "0 2px 10px rgba(0,0,0,.1)"
      }}
    >
      <h2 style={{ color:"#2563eb" }}>
        My Business
      </h2>

      <div
        style={{
          display:"flex",
          gap:"25px"
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