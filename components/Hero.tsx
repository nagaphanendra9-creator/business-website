export default function Hero({
  companyName,
  tagline,
}: {
  companyName: string;
  tagline: string;
}) {
  return (
    <div style={{ padding: "40px" }}>
      <h1>{companyName}</h1>
      <p>{tagline}</p>
    </div>
  );
}