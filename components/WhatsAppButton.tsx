export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919999999999"
      target="_blank"
      rel="noreferrer"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        background: "#25D366",
        color: "white",
        padding: "15px 20px",
        borderRadius: "50px",
        textDecoration: "none",
        fontWeight: "bold",
        zIndex: 1000
      }}
    >
      WhatsApp
    </a>
  );
}