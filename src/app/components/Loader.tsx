import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      {/* Loader Animation */}
      <div className="w-20 h-20 border-4 border-t-4 border-gray-200 rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;
