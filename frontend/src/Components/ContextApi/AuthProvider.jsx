import { createContext, useState } from "react";
import { toast } from 'react-hot-toast'
import {useNavigate} from 'react-router-dom'
import { useContext } from "react";
import { ProtectedContext } from "./ProtectedRoute";



export const AuthContext = createContext()


const AuthProvider = ({ children }) => {
    const navigate = useNavigate()
    // const navigate = useNavigate()
    const [signUpAuthCredentials, setSignUpAuthCredentials] = useState({
        name: "",
        email: "",
        password: "",
    })


    const [loginAuthCredentials, setLoginAuthCredentials] = useState({
        email: "",
        password: "",
    })

    // admin credentials

    const [adminCredentials, setAdminCredentials] = useState({
        name: "",
        password: "",
    })


    const baseUrl = "http://localhost:3000"


    // signup user

    const handleSignUp = async () => {
        const response = await fetch(`${baseUrl}/api/auth/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: signUpAuthCredentials.name,
                email: signUpAuthCredentials.email,
                password: signUpAuthCredentials.password
            })
        })
        const data = await response.json()
        if (response.ok) {
            setSignUpAuthCredentials({
                name:'',
                email: '',
                password: ''
            })
            toast.success(data.success)


        }
        else {
            toast.error(data.error)
        }
    }

    // login user

    const handleLogIn = async () => {
        const response = await fetch(`${baseUrl}/api/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: loginAuthCredentials.email,
                password: loginAuthCredentials.password
            }),
            credentials: 'include'
        })
        const data = await response.json()
        console.log(data.token)

        // set user token in local storage
        localStorage.setItem('userToken', data.token)

        if (response.ok) {
            setLoginAuthCredentials({
                email: '',
                password: ''
            })

            setTimeout(() => {
                navigate('/home')
            }, 2000);

            toast.success(data.success)

        }
        else {
            toast.error(data.error)
        }
    }

    // logout user


    const handleLogOut = async () => {
        const response = await fetch(`${baseUrl}/api/auth/logout`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: 'include'
        })
        const data = await response.json()

        // set user token in local storage

        if (response.ok) {
            localStorage.removeItem('userToken')
            toast.success(data.success)
        }
        else {
            toast.error(data.error)
        }
    }


    // google login success handler


    const handleGoogleLogin = async (credential) => {
        const response = await fetch(`${baseUrl}/api/auth/google/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idToken: credential
            }),
            credentials: 'include'
        })
        const data = await response.json()
        console.log(data)

        // set user token in local storage
        
        if (response.ok) {
            console.log(data.idToken)
            console.log(data.idToken)
            localStorage.setItem('userToken', data.idToken)
            toast.success(data.success)
        }
        else {
            toast.error(data.error)
        }
    }


    // admin login handler


    const handleAdminLogin = async () => {
        const response = await fetch(`${baseUrl}/api/auth/admin/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: adminCredentials.name,
                password: adminCredentials.password
            }),
            credentials: 'include'
        })
        const data = await response.json()
        console.log(data)
        // set user token in local storage
        localStorage.setItem('userToken', data.token)
        if (response.ok) {
            toast.success(data.success)
        }
        else {
            toast.error(data.error)
        }
    }


    return (    
        <AuthContext.Provider value={{handleSignUp, handleLogIn, handleLogOut, handleGoogleLogin,loginAuthCredentials,setLoginAuthCredentials,signUpAuthCredentials,setSignUpAuthCredentials,adminCredentials, setAdminCredentials, handleAdminLogin }}>
            {children}
        </AuthContext.Provider>

    )
}

export default AuthProvider