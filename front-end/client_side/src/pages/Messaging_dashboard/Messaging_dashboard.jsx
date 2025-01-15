import React from 'react';
import { Search, MoreHorizontal, Send, Image, Smile, Link2 } from 'lucide-react';

const MessageDashboard = () => {
  const conversations = [
    {
      id: 1,
      name: "Sarah Wilson",
      username: "@sarahw",
      lastMessage: "Thanks for the project update!",
      time: "2m",
      avatar: "/api/placeholder/40/40"
    },
    {
      id: 2,
      name: "Tech Team",
      username: "@techteam",
      lastMessage: "The new feature is ready for review",
      time: "1h",
      avatar: "/api/placeholder/40/40"
    },
    {
      id: 3,
      name: "John Developer",
      username: "@johndev",
      lastMessage: "Can we schedule a meeting?",
      time: "3h",
      avatar: "/api/placeholder/40/40"
    }
  ];

  return (
    <div className="flex h-screen bg-white dark:bg-gray-900">
      {/* Left Sidebar - Conversations List */}
      <div className="w-96 border-r border-gray-200 dark:border-gray-800">
        <div className="p-4 border-b border-gray-200 dark:border-gray-800">
          <h1 className="text-xl font-bold dark:text-white">Messages</h1>
        </div>
        
        {/* Search Bar */}
        <div className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search messages"
              className="w-full pl-10 pr-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full 
                       border-none focus:ring-2 focus:ring-blue-500 dark:text-gray-200"
            />
          </div>
        </div>

        {/* Conversations List */}
        <div className="overflow-y-auto">
          {conversations.map((chat) => (
            <div
              key={chat.id}
              className="flex items-center p-4 hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer"
            >
              <img
                src={chat.avatar}
                alt={chat.name}
                className="w-12 h-12 rounded-full"
              />
              <div className="ml-4 flex-1">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold dark:text-white">{chat.name}</h3>
                  <span className="text-sm text-gray-500">{chat.time}</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">{chat.username}</p>
                <p className="text-sm text-gray-500 truncate">{chat.lastMessage}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="p-4 border-b border-gray-200 dark:border-gray-800 flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="/api/placeholder/40/40"
              alt="Current chat"
              className="w-10 h-10 rounded-full"
            />
            <div className="ml-4">
              <h2 className="font-semibold dark:text-white">Sarah Wilson</h2>
              <p className="text-sm text-gray-500">@sarahw</p>
            </div>
          </div>
          <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full">
            <MoreHorizontal className="h-5 w-5 text-gray-500" />
          </button>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {/* Received Message */}
          <div className="flex items-start max-w-xl">
            <img
              src="/api/placeholder/32/32"
              alt="Sarah"
              className="w-8 h-8 rounded-full mt-1"
            />
            <div className="ml-2">
              <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-3">
                <p className="text-gray-900 dark:text-gray-200">Hey! How's the portfolio coming along?</p>
              </div>
              <span className="text-xs text-gray-500 ml-2">2:30 PM</span>
            </div>
          </div>

          {/* Sent Message */}
          <div className="flex items-start justify-end max-w-xl ml-auto">
            <div className="mr-2">
              <div className="bg-blue-500 rounded-2xl p-3">
                <p className="text-white">It's going great! I'm working on the messaging dashboard right now.</p>
              </div>
              <span className="text-xs text-gray-500 ml-2">2:31 PM</span>
            </div>
          </div>
        </div>

        {/* Message Input */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-800">
          <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-full p-2">
            <div className="flex space-x-2 px-2">
              <button className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full">
                <Image className="h-5 w-5 text-gray-500" />
              </button>
              <button className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full">
                <Link2 className="h-5 w-5 text-gray-500" />
              </button>
              <button className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full">
                <Smile className="h-5 w-5 text-gray-500" />
              </button>
            </div>
            <input
              type="text"
              placeholder="Start a new message"
              className="flex-1 bg-transparent border-none focus:ring-0 px-4 dark:text-gray-200"
            />
            <button className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full">
              <Send className="h-5 w-5 text-blue-500" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageDashboard;