import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      style={{
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        padding:"15px 30px",
        background:"#ffffff",
        borderBottom:"1px solid #ddd"
      }}
    >
      <Link
        href="/"
        style={{
          display:"flex",
          alignItems:"center",
          gap:"10px",
          textDecoration:"none",
          color:"black"
        }}
      >
        <Image
          src="/logo.png"
          alt="Logo"
          width={50}
          height={50}
        />

        <h2>My Business</h2>
      </Link>

      <div
        style={{
          display:"flex",
          gap:"20px"
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