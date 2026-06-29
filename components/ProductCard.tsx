type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
};

export default function ProductCard({
  product,
  whatsappNumber
}:{
  product: Product;
  whatsappNumber: string;
}) {

  const whatsappLink =
    `https://wa.me/${whatsappNumber}?text=` +
    encodeURIComponent(
      `Hi, I want to buy:
Product: ${product.name}
Price: ₹${product.price}`
    );

  return (
    <div
      style={{
        background:"white",
        borderRadius:"15px",
        overflow:"hidden",
        boxShadow:"0 5px 15px rgba(0,0,0,.1)"
      }}
    >
      <img
        src={product.imageUrl}
        alt={product.name}
        style={{
          width:"100%",
          height:"220px",
          objectFit:"cover"
        }}
      />

      <div style={{padding:"20px"}}>

        <h3>{product.name}</h3>

        <p>{product.description}</p>

        <h2>₹{product.price}</h2>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          style={{
            display:"inline-block",
            marginTop:"10px",
            background:"#25D366",
            color:"white",
            padding:"10px 20px",
            borderRadius:"8px",
            textDecoration:"none"
          }}
        >
          Buy Now
        </a>

      </div>
    </div>
  );
}