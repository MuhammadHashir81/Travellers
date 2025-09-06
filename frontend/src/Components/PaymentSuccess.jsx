import React from "react";
import { CheckCircle2 } from "lucide-react"; // success icon

const PaymentSuccess = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-50 to-green-100 px-4">
      <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-md text-center animate-fade-in">
        <CheckCircle2 className="mx-auto text-green-600 w-20 h-20 mb-4" />
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Payment Successful 🎉
        </h1>
        <p className="text-gray-600 mb-6">
          Your transaction has been completed
          successfully
        </p>
        <a
          href="/"
          className="inline-block px-6 py-3 bg-green-600 text-white font-medium rounded-xl shadow-lg hover:bg-green-700 transition-all duration-200"
        >
          Go Back to Home
        </a>
      </div>
    </div>
  );
};

export default PaymentSuccess;
