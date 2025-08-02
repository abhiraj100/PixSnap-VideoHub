import React from "react";
import spinner from "../spinner.gif";

const Loader = () => {
  return (
    <>
      <div className="img">
        <div className="loader-container">
          <img src={spinner} alt="Loading videos..." />
          <p className="loading-text">Loading amazing videos...</p>
        </div>
      </div>
      
      <style jsx>{`
        .loader-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }
        
        .loading-text {
          color: #ffc107;
          font-size: 18px;
          font-weight: 500;
          margin: 0;
          animation: fadeInOut 2s infinite;
        }
        
        @keyframes fadeInOut {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
      `}</style>
    </>
  );
};

export default Loader;