export default function Stats({
  totalProducts
}:{
  totalProducts:number
}) {
  return (
    <section
      style={{
        display:"flex",
        justifyContent:"center",
        gap:"40px",
        padding:"50px",
        flexWrap:"wrap"
      }}
    >
      <div>
        <h1>500+</h1>
        <p>Happy Customers</p>
      </div>

      <div>
        <h1>{totalProducts}</h1>
        <p>Products</p>
      </div>

      <div>
        <h1>24/7</h1>
        <p>Support</p>
      </div>
    </section>
  );
}