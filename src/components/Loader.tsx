import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-main">
      <div className="relative flex items-center justify-center">
        {/* Logo */}
        <img 
          src="/assets/Photos/Logo.svg" 
          alt="Loading..." 
          className="w-[100px] relative z-10 animate-fire-glow" 
        />
      </div>
    </div>
  );
};

export default Loader;
