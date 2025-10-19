// 📄 src/components/FacialExpression.jsx
import React from "react";
import { useFaceApi } from "../context/useFaceApi";

const FacialExpression = () => {
  const { videoRef, mood, isDetecting, handleStartListening } = useFaceApi();

  return (
    <div className="bg-gray-900 rounded-t-xl text-white min-h-[50%] flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-6">Live Mood Detection</h1>

      <div className="bg-gray-800 rounded-xl min-h-[50%] shadow-md p-6 w-full max-w-4xl flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
        {/* Video */}
        <div className="flex justify-center min-h-[50%] items-center w-full md:w-1/2">
          <video
            ref={videoRef}
            autoPlay
            muted
            className="rounded-lg w-[90%] max-h-[300px] object-cover"
          />
        </div>

        {/* Info */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start space-y-3">
          <h2 className="text-xl font-semibold">Your Current Mood</h2>
          <p className="capitalize text-purple-400 text-lg">{mood}</p>

          <button
            onClick={handleStartListening}
            disabled={isDetecting}
            className={`px-5 py-2 rounded-lg font-medium transition ${isDetecting
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-purple-600 hover:bg-purple-700"
              }`}
          >
            {isDetecting ? "Detecting..." : "Start Listening"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FacialExpression;
