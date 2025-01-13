import { createContext, useContext, useState } from "react";

const user_ = {
  username: "cintia",
  password: "test",
};
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [ error, setError]= useState(null)

  const login = ({username, password}) => {
    if(username === user_.username && password === user_.password){
        setUser({username, password})
        setError(null)
    }else {
        setError('El usuario o contraseña no coincide con nuestros regitros')
    }
  };

  const logout = () => {
    setUser(null)
  };

  return (
    <AuthContext.Provider value={{ user, error, login, logout }}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext)