import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiPaperAirplane, HiPhotograph, HiEmojiHappy } from 'react-icons/hi';

const Chat = () => {
  const chatEndRef = useRef(null);
  const [message, setMessage] = useState('');

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, []);

  return (
    <div className="h-screen flex">
      {/* Sidebar */}
      <motion.div 
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        className="w-80 bg-gray-800/50 backdrop-blur-lg border-r border-gray-700"
      >
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-4">Conversations</h2>
          <input
            type="search"
            placeholder="Search chats..."
            className="w-full px-4 py-2 rounded-lg bg-gray-700/50 border border-gray-600 focus:outline-none focus:border-purple-500"
          />
        </div>
        
        <div className="overflow-y-auto">
          {conversations.map((conv) => (
            <motion.div
              key={conv.id}
              whileHover={{ backgroundColor: 'rgba(107, 114, 128, 0.2)' }}
              className="p-4 cursor-pointer"
            >
              <div className="flex items-center space-x-3">
                <img src={conv.avatar} alt={conv.name} className="w-10 h-10 rounded-full" />
                <div>
                  <h3 className="font-medium">{conv.name}</h3>
                  <p className="text-sm text-gray-400">{conv.lastMessage}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        <div className="p-4 border-b border-gray-700 bg-gray-800/30">
          <div className="flex items-center space-x-3">
            <img src={activeChat.avatar} alt={activeChat.name} className="w-10 h-10 rounded-full" />
            <div>
              <h2 className="font-semibold">{activeChat.name}</h2>
              <p className="text-sm text-gray-400">{activeChat.status}</p>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          <AnimatePresence>
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className={`flex ${msg.isMine ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[70%] rounded-2xl p-4 ${
                  msg.isMine 
                    ? 'bg-purple-600 rounded-br-none' 
                    : 'bg-gray-700 rounded-bl-none'
                }`}>
                  <p>{msg.text}</p>
                  <span className="text-xs text-gray-300 mt-2 block">{msg.time}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          <div ref={chatEndRef} />
        </div>

        <div className="p-4 border-t border-gray-700 bg-gray-800/30">
          <div className="flex items-center space-x-4">
            <button className="text-gray-400 hover:text-purple-500">
              <HiPhotograph className="w-6 h-6" />
            </button>
            <button className="text-gray-400 hover:text-purple-500">
              <HiEmojiHappy className="w-6 h-6" />
            </button>
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 px-4 py-2 rounded-full bg-gray-700/50 border border-gray-600 focus:outline-none focus:border-purple-500"
            />
            <button className="text-purple-500 hover:text-purple-400">
              <HiPaperAirplane className="w-6 h-6 transform rotate-90" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
