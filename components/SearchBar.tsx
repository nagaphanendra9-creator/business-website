"use client";

import { useState } from "react";

export default function SearchBar({
  onSearch,
}:{
  onSearch:(value:string)=>void
}) {
  const [search,setSearch]=useState("");

  return (
    <input
      type="text"
      placeholder="Search products..."
      value={search}
      onChange={(e)=>{
        setSearch(e.target.value);
        onSearch(e.target.value);
      }}
      style={{
        width:"100%",
        padding:"12px",
        marginBottom:"20px",
        border:"1px solid #ddd",
        borderRadius:"10px"
      }}
    />
  );
}