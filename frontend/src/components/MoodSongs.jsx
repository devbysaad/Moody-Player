import React from "react";

const MoodSongs = ({ songs }) => {
  return (
    <div className="mt-8 bg-gray-900 rounded-xl p-6 shadow-lg">
      <h2 className="text-2xl font-bold mb-4">🎧 Songs for Your Mood</h2>
      {songs.length === 0 ? (
        <p className="text-gray-400">No songs found for this mood.</p>
      ) : (
        <ul className="space-y-2">
          {songs.map((song, index) => (
            <li
              key={index}
              className="p-3 bg-gray-800 rounded-lg flex justify-between items-center"
            >
              <span className="font-medium">{song.title}</span>
              <span className="text-gray-400 text-sm">by {song.artist}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MoodSongs;
