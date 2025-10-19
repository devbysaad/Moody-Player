import React, { useState } from "react";
import FacialExpression from "./components/FacialExpression";
import MoodSongs from "./components/MoodSongs";

function App() {
  const [songs, setSongs] = useState([
    { title: "Sunrise Serenade", artist: "Ava Carter" },
    { title: "Midnight Groove", artist: "Ethan Blake" },
  ]);

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 px-6 py-10 font-sans">
      <div className="max-w-6xl mx-auto rounded-2xl">
        <FacialExpression setSongs={setSongs} />
        <MoodSongs songs={songs} />
      </div>
    </div>
  );
}

export default App;
