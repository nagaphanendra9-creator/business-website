export default function WhatsAppButton() {
  const phone = "917075629604";

  return (
    <a
      href={`https://wa.me/${phone}`}
      target="_blank"
      rel="noreferrer"
      style={{
        position:"fixed",
        bottom:"20px",
        right:"20px",
        background:"#25D366",
        color:"white",
        padding:"15px",
        borderRadius:"50%",
        textDecoration:"none"
      }}
    >
      WhatsApp
    </a>
  );
}