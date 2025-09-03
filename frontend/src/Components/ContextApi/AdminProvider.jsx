import { createContext, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const AdminContext = createContext();

const AdminProvider = ({ children }) => {

  const [adminCredentials, setAdminCredentials] = useState({
    name: "",
    password: "",
  });



  const navigate = useNavigate(); // 

  // login admin
  const baseUrl = "http://localhost:3000";

  const adminLogin = async () => {
    const response = await fetch(`${baseUrl}/api/auth/admin/login`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name: adminCredentials.name,
        password: adminCredentials.password,
      }),
      credentials:'include'
    });
    const data = await response.json();

    if (response.ok) {
      toast.success(data.success);
      setAdminCredentials({ name: "", password: "" });
      localStorage.setItem('adminToken',data.token)

      setTimeout(() => {
        navigate('/admin-dashboard')
      }, 2000);

    } else {
      toast.error(data.error);
    }
  };


  // admin logout

  const adminLogOut = async () =>{
    const response = await fetch(`${baseUrl}/api/auth/admin/logout`,{
      method:'GET',
      headers:{
        'Content-Type':'application/json'
      },
      credentials:'include'


    })

    const data = await response.json()

    if (response.ok) {
      console.log(data.success)
      toast.success(data.success)
      localStorage.removeItem('adminToken')
      setTimeout(() => {
         navigate('/')
      }, 2000);
    }
  }





  return (
    <AdminContext.Provider
      value={{ adminLogin, adminCredentials, setAdminCredentials,adminLogOut }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export default AdminProvider;
