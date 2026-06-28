import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          padding: 0,
          fontFamily: "Arial, sans-serif"
        }}
      >
        <Navbar />

        <main>
          {children}
        </main>

        <WhatsAppButton />

        <Footer />
      </body>
    </html>
  );
}