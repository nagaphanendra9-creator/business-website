"use client";

import { useEffect, useState } from "react";

export default function AdminPage() {
  const [products, setProducts] = useState<any[]>([]);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const [imageFile, setImageFile] =
    useState<File | null>(null);

  const [editingId, setEditingId] =
    useState("");

  async function loadProducts() {
    const res = await fetch("/api/allproducts");
    const data = await res.json();
    setProducts(data);
  }

  useEffect(() => {
    loadProducts();
  }, []);

  async function addProduct() {

    const formData = new FormData();

    formData.append("name", name);
    formData.append(
      "description",
      description
    );
    formData.append(
      "price",
      price
    );
    formData.append(
      "category",
      category
    );

    if (imageFile) {
      formData.append(
        "image",
        imageFile
      );
    }

    await fetch("/api/products", {
      method:"POST",
      body:formData
    });

    clearForm();
    loadProducts();
  }

  async function deleteProduct(
    id:string
  ) {
    await fetch(
      `/api/products/${id}`,
      {
        method:"DELETE"
      }
    );

    loadProducts();
  }

  function editProduct(
    product:any
  ) {
    setEditingId(product.id);

    setName(product.name);
    setPrice(
      product.price.toString()
    );
    setDescription(
      product.description
    );
    setCategory(
      product.category || ""
    );
  }

  function clearForm() {

    setEditingId("");

    setName("");
    setPrice("");
    setDescription("");
    setCategory("");

    setImageFile(null);
  }

  return (
    <div style={{padding:"40px"}}>

      <h1>
        Owner Dashboard
      </h1>

      <div
        style={{
          border:"1px solid #ccc",
          padding:"20px",
          marginBottom:"20px"
        }}
      >

        <h2>
          Add New Product
        </h2>

        <input
          placeholder="Product Name"
          value={name}
          onChange={(e)=>
            setName(
              e.target.value
            )
          }
        />

        <br/><br/>

        <input
          placeholder="Price"
          value={price}
          onChange={(e)=>
            setPrice(
              e.target.value
            )
          }
        />

        <br/><br/>

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e)=>
            setDescription(
              e.target.value
            )
          }
        />

        <br/><br/>

        <input
          placeholder="Category"
          value={category}
          onChange={(e)=>
            setCategory(
              e.target.value
            )
          }
        />

        <br/><br/>

        <input
          type="file"
          accept="image/*"
          onChange={(e)=>{
            if(
              e.target.files
            ){
              setImageFile(
                e.target.files[0]
              );
            }
          }}
        />

        <br/><br/>

        <button
          onClick={addProduct}
        >
          Add Product
        </button>

      </div>

      <h2>
        Manage Products
      </h2>

      {products.map(
        (product:any)=>(
        <div
          key={product.id}
          style={{
            border:
            "1px solid gray",
            padding:"10px",
            marginBottom:"10px"
          }}
        >

          <img
            src={
              product.imageUrl
            }
            width={100}
            alt={
              product.name
            }
          />

          <h3>
            {product.name}
          </h3>

          <p>
            {product.description}
          </p>

          <p>
            Category:
            {product.category}
          </p>

          <p>
            ₹{product.price}
          </p>

          <div
            style={{
              display:"flex",
              gap:"10px"
            }}
          >
            <button
              onClick={()=>
              editProduct(
                product
              )
            }
            >
              Edit
            </button>

            <button
              onClick={()=>
              deleteProduct(
                product.id
              )
            }
            >
              Delete
            </button>

          </div>

        </div>
      ))}

    </div>
  );
}