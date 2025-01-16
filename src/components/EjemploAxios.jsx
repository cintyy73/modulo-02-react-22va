import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UsersList = () => {
  const [users, setUsers] = useState([]);  // Estado para almacenar los usuarios
  const [loading, setLoading] = useState(true);  // Estado para saber si estamos cargando
  const [error, setError] = useState(null);  // Estado para manejar errores

  useEffect(() => {
    // Función asincrónica para hacer la petición
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://6787f2f6c4a42c916108dadb.mockapi.io/api/products'); // Coloca el endpoint correcto
        console.log(response.data);  // Guardamos los datos en el estado
        setLoading(false);  // Cambiar el estado de carga
      } catch (err) {
        setError(err.message);  // En caso de error, guardamos el mensaje de error
        setLoading(false);  // También cambiamos el estado de carga
      }
    };

    fetchUsers();  // Llamar la función cuando el componente se monta
  }, []);  // El array vacío asegura que solo se ejecute una vez al montarse el componente

  // Renderizado condicional según el estado de carga y error
  if (loading) {
    return <p>Cargando productos...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>Lista de productos</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>  // Asumiendo que cada usuario tiene una propiedad `id` y `name`
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
