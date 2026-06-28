"use client";

import { useState } from "react";
import SearchBar from "./SearchBar";
import ProductCard from "./ProductCard";

export default function ProductList({
  products,
  whatsappNumber
}: any) {

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(
      products
        .filter((p:any)=>p.category)
        .map((p:any)=>p.category)
    )
  ];

  const filteredProducts = products.filter(
    (product:any)=>
      product.name
        .toLowerCase()
        .includes(search.toLowerCase()) &&
      (
        category==="All" ||
        product.category===category
      )
  );

  return(
    <>
      <SearchBar onSearch={setSearch} />

      <div
        style={{
          display:"flex",
          gap:"10px",
          marginBottom:"20px",
          flexWrap:"wrap"
        }}
      >
        {categories.map((cat:any)=>(
          <button
            key={cat}
            onClick={()=>setCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div
        style={{
          display:"grid",
          gridTemplateColumns:
          "repeat(auto-fit,minmax(300px,1fr))",
          gap:"20px"
        }}
      >
        {filteredProducts.map((product:any)=>(
          <ProductCard
            key={product.id}
            product={product}
            whatsappNumber={whatsappNumber}
          />
        ))}
      </div>
    </>
  );
}