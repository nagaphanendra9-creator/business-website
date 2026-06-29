export default function Hero({
  companyName,
  tagline,
}: {
  companyName: string;
  tagline: string;
}) {
  return (
    <section
      style={{
        backgroundImage: "linear-gradient(rgba(0,0,0,.55), rgba(0,0,0,.55)), url('/hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "500px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "white"
      }}
    >
      <div
        style={{
          background: "rgba(0,0,0,0.5)",
          padding: "40px",
          borderRadius: "15px"
        }}
      >
        <h1
          style={{
            fontSize: "50px",
            marginBottom: "20px"
          }}
        >
          {companyName}
        </h1>

        <p
          style={{
            fontSize: "22px"
          }}
        >
          {tagline}
        </p>
      </div>
    </section>
  );
}