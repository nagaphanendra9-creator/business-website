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
        gap:"30px",
        padding:"60px 20px",
        flexWrap:"wrap"
      }}
    >
      {[
        {
          title:"500+",
          subtitle:"Happy Customers"
        },
        {
          title:totalProducts,
          subtitle:"Products"
        },
        {
          title:"24/7",
          subtitle:"Support"
        }
      ].map((item,index)=>(
        <div
          key={index}
          style={{
            background:"white",
            padding:"30px",
            borderRadius:"15px",
            minWidth:"220px",
            textAlign:"center",
            boxShadow:
            "0 5px 20px rgba(0,0,0,.1)"
          }}
        >
          <h1
            style={{
              color:"#2563eb",
              fontSize:"40px"
            }}
          >
            {item.title}
          </h1>

          <p>{item.subtitle}</p>
        </div>
      ))}
    </section>
  );
}