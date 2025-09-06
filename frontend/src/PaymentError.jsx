import React from "react";
import { XCircle } from "lucide-react"; // error icon

const PaymentError = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-red-50 to-red-100 px-4">
      <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-md text-center animate-fade-in">
        <XCircle className="mx-auto text-red-600 w-20 h-20 mb-4" />
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Payment Failed ❌
        </h1>
        <p className="text-gray-600 mb-6">
          Oops! Something went wrong with your transaction.  
          Please try again or contact support if the issue continues.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="/"
            className="inline-block px-6 py-3 bg-gray-600 text-white font-medium rounded-xl shadow-lg hover:bg-gray-700 transition-all duration-200"
          >
            Go Back Home
          </a>
          <a
            href="/checkout"
            className="inline-block px-6 py-3 bg-red-600 text-white font-medium rounded-xl shadow-lg hover:bg-red-700 transition-all duration-200"
          >
            Try Again
          </a>
        </div>
      </div>
    </div>
  );
};

export default PaymentError;
