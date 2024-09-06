import React from 'react';
import { FaUsers } from 'react-icons/fa';

const Header = ({ room, name, toggleSidebar }) => (
  <div className='bg-black text-white p-4 flex justify-between items-center rounded-t-lg px-6'>
    <div className='flex items-center'>
        <img src='/logo.png' alt="logo" className='absolute w-[90px]' />

    </div>
    <div className='flex gap-4 items-center'>
      <span className="font-semibold italic">{name}</span>
      <button
        onClick={toggleSidebar}
        className="text-white bg-gray-700 p-2 rounded-lg hover:bg-gray-800"
      >
        <FaUsers />
      </button>
    </div>
  </div>
);

export default Header;
