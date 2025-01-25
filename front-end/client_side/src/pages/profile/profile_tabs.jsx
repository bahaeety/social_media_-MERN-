import React, { useState } from 'react';
import { Bookmark, Heart, MessageCircle } from 'lucide-react';

const ProfileTabs = () => {
  const [activeTab, setActiveTab] = useState('posts');

  const tabs = [
    { id: 'posts', label: 'Posts' },
    { id: 'replies', label: 'Replies', icon: MessageCircle },
    { id: 'likes', label: 'Likes', icon: Heart },
    { id: 'saved', label: 'Saved', icon: Bookmark }
  ];

  return (
    <div className="border-t border-gray-200 mt-4">
      {/* Tabs Navigation */}
      <div className="flex">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 py-4 text-sm font-medium relative hover:bg-gray-50
              ${activeTab === tab.id ? 'text-black' : 'text-gray-500'}`}
          >
            <div className="flex items-center justify-center gap-2">
              {tab.icon && <tab.icon size={16} />}
              <span>{tab.label}</span>
            </div>
            {activeTab === tab.id && (
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-500" />
            )}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="min-h-screen p-4">
        {activeTab === 'posts' && (
          <div className="space-y-4">
            {/* Post content will be dynamically loaded here */}
          </div>
        )}
        
        {activeTab === 'replies' && (
          <div className="space-y-4">
            {/* Replies will be dynamically loaded here */}
          </div>
        )}
        
        {activeTab === 'likes' && (
          <div className="space-y-4">
            {/* Liked posts will be dynamically loaded here */}
          </div>
        )}
        
        {activeTab === 'saved' && (
          <div className="space-y-4">
            {/* Saved posts will be dynamically loaded here */}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileTabs;