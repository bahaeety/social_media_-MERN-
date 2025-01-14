import React from 'react';
import { Search, MoreHorizontal, Sparkles } from 'lucide-react';

const SideBar = () => {
  const trendingTopics = [
    { title: "Los Angeles Fires", category: "LIVE", posts: "125K" },
    { title: "TikTok", category: "Trending in Canada", posts: "79.7K" },
    { title: "Jerry Jones", category: "Sports", posts: "26.3K" },
    { title: "Cowboys", category: "NFL", posts: "52.4K" }
  ];

  const suggestedUsers = [
    { name: "John Developer", handle: "@johndev", verified: true },
    { name: "Tech Insights", handle: "@techinsights", verified: true },
    { name: "Web Design Daily", handle: "@webdesign", verified: false }
  ];

  return (
    <div className="w-96 p-4 h-screen border-l border-gray-200">
      {/* Search Bar */}
      <div className="relative mb-4">
        <Search className="absolute left-3 top-3 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Search"
          className="w-full pl-12 pr-4 py-3 bg-gray-100 rounded-full border border-transparent focus:border-blue-400 focus:bg-white transition-colors"
        />
      </div>

      {/* Premium Card */}
      <div className="bg-gray-50 rounded-xl p-4 mb-4">
        <h2 className="text-xl font-bold mb-2">Subscribe to Premium</h2>
        <p className="text-gray-600 mb-3">Get exclusive features and earn revenue share.</p>
        <button className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-full hover:bg-blue-600 transition-colors">
          Subscribe
        </button>
      </div>

      {/* Trending Section */}
      <div className="bg-gray-50 rounded-xl mb-4">
        <h2 className="text-xl font-bold p-4">What's happening</h2>
        {trendingTopics.map((topic, index) => (
          <div key={index} className="px-4 py-3 hover:bg-gray-100 cursor-pointer transition-colors">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500">{topic.category}</p>
                <p className="font-bold">{topic.title}</p>
                <p className="text-sm text-gray-500">{topic.posts} posts</p>
              </div>
              <button className="text-gray-400 hover:text-blue-500 hover:bg-blue-50 p-2 rounded-full transition-colors">
                <MoreHorizontal size={18} />
              </button>
            </div>
          </div>
        ))}
        <button className="p-4 text-blue-500 hover:bg-gray-100 w-full text-left transition-colors rounded-b-xl">
          Show more
        </button>
      </div>

      {/* Who to Follow */}
      <div className="bg-gray-50 rounded-xl">
        <h2 className="text-xl font-bold p-4">Who to follow</h2>
        {suggestedUsers.map((user, index) => (
          <div key={index} className="px-4 py-3 hover:bg-gray-100 flex items-center justify-between transition-colors">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gray-300 rounded-full mr-3" />
              <div>
                <div className="flex items-center">
                  <p className="font-bold">{user.name}</p>
                  {user.verified && (
                    <Sparkles size={16} className="text-blue-500 ml-1" />
                  )}
                </div>
                <p className="text-gray-500">{user.handle}</p>
              </div>
            </div>
            <button className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors">
              Follow
            </button>
          </div>
        ))}
        <button className="p-4 text-blue-500 hover:bg-gray-100 w-full text-left transition-colors rounded-b-xl">
          Show more
        </button>
      </div>

      {/* Footer Links */}
      <div className="mt-4 px-4">
        <div className="flex flex-wrap gap-2 text-sm text-gray-500">
          <a href="#" className="hover:underline">Terms of Service</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Cookie Policy</a>
          <a href="#" className="hover:underline">Accessibility</a>
          <a href="#" className="hover:underline">Ads info</a>
          <a href="#" className="hover:underline">More</a>
          <span>© 2024 Echo, Inc.</span>
        </div>
      </div>
    </div>
  );
};

export default SideBar;