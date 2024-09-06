import React, { useState } from 'react';
import EmojiPicker from 'emoji-picker-react';

const MessageInput = ({ message, setMessage, sendMessage, inputStyle }) => {
  const [isEmojiPickerVisible, setEmojiPickerVisible] = useState(false);

  const onEmojiClick = (emojiData) => {
    setMessage((prevMessage) => prevMessage + emojiData.emoji);
    setEmojiPickerVisible(false); 
  };

  return (
    <div className="flex items-center px-8 py-4 relative">
     
      {isEmojiPickerVisible && (
        <div className="absolute bottom-16 left-8 z-10">
          <EmojiPicker onEmojiClick={onEmojiClick} />
        </div>
      )}
      
      <div className={`h-[48px] rounded-xl bg-gray-200 flex items-center justify-between py-2 px-4 transition-all duration-300 ${inputStyle}`}>
        <div className="flex items-center w-full">
          {/* Emoji Picker Toggle Button */}
          <button
            type="button"
            onClick={() => setEmojiPickerVisible(!isEmojiPickerVisible)} 
            className="w-[24px] h-[24px] mr-2"
          >
            <img src='/emoji.png' alt="emoji" />
          </button>

          <input
            className="flex-grow rounded-lg px-3 py-2 focus:outline-none bg-transparent w-full"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            onKeyPress={(event) =>
              event.key === 'Enter' ? sendMessage(event) : null
            }
            placeholder="Message"
          />
        </div>

        <img
          src='/send.png'
          alt="send"
          className='w-[26px] h-[26px] cursor-pointer'
          onClick={sendMessage}
        />
      </div>
    </div>
  );
};

export default MessageInput;
