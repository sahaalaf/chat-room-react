import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import Header from './Header';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import Sidebar from './SideBar';

let socket;

const Chat = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const ENDPOINT = 'http://localhost:5000';

  useEffect(() => {
    const { name, room } = queryString.parse(window.location.search);
    socket = io(ENDPOINT);

    setName(name);
    setRoom(room);

    socket.emit('join', { name, room }, (error) => {
      if (error) {
        alert(error);
      }
    });

    socket.on('roomData', ({ users }) => {
      setUsers(users);
    });

    return () => {
      socket.disconnect();
    };
  }, [ENDPOINT]);

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages((messages) => [...messages, message]);
    });
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();
    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  };

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="flex h-screen bg-gray-200 items-center justify-center overflow-hidden">
      <div className="relative w-[80%] h-[90vh] shadow-xl bg-gray-300 rounded-lg flex flex-col">
        <Header room={room} name={name} toggleSidebar={toggleSidebar} />
        <MessageList messages={messages} name={name} />
        <MessageInput
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
          inputStyle={isSidebarVisible ? 'w-[80%]' : 'w-full'} 
        />
        {isSidebarVisible && <Sidebar users={users} />}
      </div>
    </div>
  );
};

export default Chat;
