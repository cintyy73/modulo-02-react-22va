// 1- tiene comenzar con use
// 2- puede utilizar otros hook ej: useState
// 3- NO retorna jsx!!
// 4- no retorna el set sino una función que haga lo que necesito

import { useState } from "react";

export const useForm = (initialValues) => {
    
  const [values, setValues] = useState(initialValues);
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    console.log(values);
  };
  return {
    values,
    handleChange,
  };
};
