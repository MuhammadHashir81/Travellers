import { useEffect } from "react";
import { createContext, useState } from "react";

export const ProtectedContext = createContext()





const ProtectedRoute = ({children}) => {

    const [user,setUser] = useState(null)
    const [adminUser,setAdminUser] = useState(null)

    useEffect(()=>{
        const token = localStorage.getItem('userToken')
        if(token){
            setUser(token)
        }
    },[])

    const login = (token) => {
        localStorage.setItem('userToken',token)
        setUser(token)

    }

    const logout = ()=>{
        localStorage.removeItem('userToken')
        setUser(null)

    }


    const isAuthenticated = !!user




  return (
    <ProtectedContext.Provider value={{login,logout,isAuthenticated}}>
        {children}
    </ProtectedContext.Provider>
  )
}

export default ProtectedRoute