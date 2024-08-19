// src/components/ProductsTable.js
import React, { useState, useEffect } from 'react';

function ProductsTable() {
  const [data, Setdata] = useState([]);


  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        Setdata(data);
      })
      .catch((e) => {
        console.log("there is something wrong")
      }) 
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Products Table</h1>
      <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {data.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>{product.description}</td>
              <td>${product.price}</td>
              <td><img src={product.image} alt={product.title} style={{ width: '100px' }} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductsTable;
