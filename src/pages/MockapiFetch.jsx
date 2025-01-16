import React from "react";
import { useFetch } from "../hooks/useFetch";

const MockapiFetch = () => {
  const { data, loading, error } = useFetch('https://678842182c874e66b7d4c8fb.mockapi.io/api/cintia/products');

  if (loading) return <p>Cargando...</p>; // Muestra un mensaje de carga
  if (error) return <p>Error: {error}</p>; // Muestra un mensaje de error

  return (
    <div>
        { console.log(data)}
      <h1>Lista de Productos</h1>
      <ul>
        {data?.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
        
      </ul>
    </div>
  );
};

export default MockapiFetch;
