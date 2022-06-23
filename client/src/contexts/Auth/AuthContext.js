import { createContext, useState, useEffect } from "react";


import api from "../../services/api";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null);

   useEffect(() => {
      async function loadStorageData() {
         const storageUserName = localStorage.getItem("@login-jwt:user");
         const storageUserToken = localStorage.getItem("@login-jwt:token");

         if(storageUserName && storageUserToken) {
            setUser(storageUserName);
         }
      }

      loadStorageData();
   }, []);
   
   async function signIn({email, password}) {
      const response = await api.post('/auth/login', {
         email,
         password
      });

      const data = {
         name: response.data.name,
         token: response.data.token
      }

      setUser(data);

      localStorage.setItem("@login-jwt:user", response.data.name);
      localStorage.setItem("@login-jwt:token", response.data.token);
      
   }
   console.log(user)

   function signOut() {
         localStorage.clear().then(() => {
            setUser(null);
         });
   }

   return (
      <AuthContext.Provider
         value={{
            signed: !!user,
            user,
            signIn,
            signOut
         }}>
         {children}
      </AuthContext.Provider>
   );
};

export default AuthContext;