import React from 'react';

const SideBar = ({ users }) => (
  <div className="absolute top-[66px] right-0 h-[81vh] w-[20%] bg-gray-200  p-3 rounded-br-lg md:block hidden ">
    <h2 className="text-lg font-semibold mb-4">Users</h2>
    <ul>
      {users.map((user, index) => (
        <li key={index} className="flex items-center mb-2">
          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-400 text-white mr-2">
            <span className="text-lg font-semibold capitalize">{user[0]}</span>
          </div>
          {user}
        </li>
      ))}
    </ul>
  </div>
);

export default SideBar;
