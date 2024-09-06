import React from 'react';

const MessageList = ({ messages, name }) => (
  <div className="flex-grow p-4 overflow-y-auto">
    {messages.map((msg, i) => (
      <div
        key={i}
        className={`flex ${msg.user === name ? 'justify-end' : 'justify-start'} mb-4`}
      >
        {msg.user !== name && msg.user !== 'admin' && (
          <div className="w-10 h-10 flex items-center justify-center rounded-full mr-3 bg-gray-700">
            <span className="text-white text-lg font-semibold">
              {msg.user[0].toUpperCase()}
            </span>
          </div>
        )}
        <div
          className={`${msg.user === 'admin'
              ? 'text-green-700 italic text-center'
              : 'p-2 rounded-lg shadow-md bg-gray-200 text-black'
            } ${msg.user === 'admin' ? 'w-full text-center' : ''}`}
        >
          {msg.user === 'admin' ? (
            <span>{msg.text}</span>
          ) : (
            <>
              <span className="font-medium">{msg.user}: </span>
              {msg.text}
            </>
          )}
        </div>
      </div>
    ))}
  </div>
);

export default MessageList;
