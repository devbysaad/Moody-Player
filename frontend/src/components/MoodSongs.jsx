import React, { useState } from "react";

const MoodSongs = () => {
  const [songs] = useState([
    { title: "Sunrise Serenade", artist: "Ava Carter" },
    { title: "Midnight Groove", artist: "Ethan Blake" },
  ]);

  return (
    <div className="bg-gray-900 rounded-b-xl text-white  flex flex-col items-center p-6">
      <div className="w-full max-w-4xl">
        <h2 className="text-2xl font-bold mb-4 text-purple-400">Recommended Tracks</h2>

        <div className="space-y-4">
          {songs.map((song, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition"
            >
              <div>
                <div className="text-lg font-semibold">{song.title}</div>
                <div className="text-gray-400 text-sm">{song.artist}</div>
              </div>
              <button className="text-purple-400 hover:text-purple-300 text-xl">
                ▶
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoodSongs;
