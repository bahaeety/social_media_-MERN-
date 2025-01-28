import { useState } from 'react';

const Feedtoggle = () => {
  const [activeTab, setActiveTab] = useState('for-you');

  return (
    <div className="sticky top-0 z-10 bg-white bg-opacity-95 backdrop-blur">
      <div className="border-b border-gray-200">
        <div className="flex">
          <button
            onClick={() => setActiveTab('for-you')}
            className="flex-1 px-4 py-4 text-sm font-medium relative hover:bg-gray-50"
          >
            <span className={activeTab === 'for-you' ? 'text-black' : 'text-gray-500'}>
              For you
            </span>
            {activeTab === 'for-you' && (
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-500 rounded-full" />
            )}
          </button>
          
          <button
            onClick={() => setActiveTab('following')}
            className="flex-1 px-4 py-4 text-sm font-medium relative hover:bg-gray-50"
          >
            <span className={activeTab === 'following' ? 'text-black' : 'text-gray-500'}>
              Following
            </span>
            {activeTab === 'following' && (
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-500 rounded-full" />
            )}
          </button>
        </div>
      </div>

      <div className="px-4 py-3 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
          <img
          src="https://www.gravatar.com/avatar/?d=mp"
          alt=""
          className="w-15 h-15 rounded-full border-4 border-white shadow-md"
              />  
          </div>
          <input
            type="text"
            placeholder="What is happening?!"
            className="flex-1 bg-transparent text-lg outline-none placeholder-gray-500"
          />
        </div>
        <div className="flex justify-between mt-3">
          
          <button className="px-4 py-1.5 bg-blue-500 text-white rounded-full hover:bg-blue-600 font-medium">
            Post
          </button>
        </div>
      </div>

      {/* Feed Content Area */}
      <div className="divide-y divide-gray-200">
        {activeTab === 'for-you' ? (
          <div>
            {/* For You feed content */}
          </div>
        ) : (
          <div>
            {/* Following feed content */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Feedtoggle;