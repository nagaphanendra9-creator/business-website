import ProductCard from "./ProductCard";

export default function FeaturedProducts({
  products,
  whatsappNumber
}: {
  products: any[];
  whatsappNumber: string;
}) {
  return (
    <section style={{ padding: "40px" }}>
      <h2>Featured Products</h2>

      <div
        style={{
          display: "grid",
          gap: "20px",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))"
        }}
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            whatsappNumber={whatsappNumber}
          />
        ))}
      </div>
    </section>
  );
}