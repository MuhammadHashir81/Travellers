// src/pages/Landing.jsx
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <div className="">

      <h1 className="text-3xl font-bold mb-8">Welcome! Choose an option</h1>
      <div className="space-x-6 ">
        <button
          onClick={() => navigate("/login")}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg cursor-pointer"
          >
          User
        </button>
        <button
          onClick={() => navigate("/admin-login")}
          className="px-6 py-3 bg-green-500 text-white rounded-lg cursor-pointer"
          >
          Admin
        </button>
      </div>
            </div>
    </div>
  );
};

export default Landing;
