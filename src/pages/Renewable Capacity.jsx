import React from "react";

const Renewablecapacity = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-md">
        <h1 className="text-3xl font-bold text-green-700 mb-4">
          🌿 Please Be Patient 🌿
        </h1>
        <p className="text-lg text-green-600 mb-6">
          We are currently working on the SDE 7 solution. Together, let’s save
          nature and make the world a greener place. 💚
        </p>
        <div className="loader border-4 border-green-200 border-t-green-600 w-12 h-12 rounded-full mx-auto mb-6 animate-spin"></div>
        <p className="text-green-500">
          Thank you for your patience. We’ll be back soon!
        </p>
      </div>
    </div>
  );
};

export default Renewablecapacity;
