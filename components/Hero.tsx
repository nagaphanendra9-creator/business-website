export default function Hero({
 companyName,
 tagline
}:any){

 return(
  <div
   style={{
    backgroundImage:"url('/hero.jpg')",
    backgroundSize:"cover",
    backgroundPosition:"center",
    minHeight:"60vh",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    textAlign:"center",
    padding:"20px"
   }}
  >
   <div
    style={{
      background:"rgba(0,0,0,.5)",
      padding:"30px",
      borderRadius:"15px",
      color:"white",
      width:"90%",
      maxWidth:"500px"
    }}
   >
    <h1
     style={{
       fontSize:"42px",
       marginBottom:"10px"
     }}
    >
      {companyName}
    </h1>

    <p>{tagline}</p>

   </div>
  </div>
 )
}