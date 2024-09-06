import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const JoinChat = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="w-full max-w-md bg-gray-300 p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center mb-6">Join Room</h1>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-2 border rounded-lg outline-none"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Room"
            className="w-full px-4 py-2 border rounded-lg outline-none"
            onChange={(e) => setRoom(e.target.value)}
          />
        </div>
        <Link
          to={`/chat?name=${name}&room=${room}`}
          onClick={(e) => (!name || !room) ? e.preventDefault() : null}
        >
          <button
            className="w-full py-2 px-4 bg-black text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
            type="button"
          >
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
};

export default JoinChat;
