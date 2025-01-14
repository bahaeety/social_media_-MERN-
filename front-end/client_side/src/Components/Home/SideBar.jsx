import React from 'react';
import { Search, TrendingUp, MoreHorizontal, AlertCircle } from 'lucide-react';

const SearchBar = () => {
  return (
    <div className="relative mb-4">
      <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-gray-400" />
      </div>
      <input
        type="text"
        placeholder="Search"
        className="w-full bg-gray-100 rounded-full py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white border border-transparent"
      />
    </div>
  );
};

const TrendingTopic = ({ category, title, posts }) => (
  <div className="px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors">
    <div className="flex items-center justify-between">
      <span className="text-sm text-gray-500">{category}</span>
      <MoreHorizontal className="h-5 w-5 text-gray-400 hover:text-blue-500" />
    </div>
    <h3 className="font-bold text-gray-900 mt-1">{title}</h3>
    {posts && <span className="text-sm text-gray-500">{posts} posts</span>}
  </div>
);

const PremiumCard = () => (
  <div className="bg-gray-50 rounded-2xl p-4 mb-4">
    <h2 className="text-xl font-bold text-gray-900 mb-2">Subscribe to Premium</h2>
    <p className="text-gray-600 mb-4">Subscribe to unlock new features and if eligible, receive a share of ads revenue.</p>
    <button className="bg-blue-500 text-white font-bold px-4 py-2 rounded-full hover:bg-blue-600 transition-colors">
      Subscribe
    </button>
  </div>
);

const WhatsHappeningSection = () => (
  <div className="bg-gray-50 rounded-2xl overflow-hidden mb-4">
    <h2 className="text-xl font-bold px-4 py-3 border-b border-gray-200">What's happening</h2>
    
    <TrendingTopic 
      category="LIVE"
      title="Los Angeles Fires"
    />
    
    <TrendingTopic 
      category="Trending in Canada"
      title="TikTok"
      posts="883K"
    />
    
    <TrendingTopic 
      category="Politics · Trending"
      title="Netanyahu"
      posts="113K"
    />
    
    <TrendingTopic 
      category="Politics · Trending"
      title="Danielle Smith"
      posts="16.6K"
    />
    
    <button className="text-blue-500 hover:text-blue-600 px-4 py-3 w-full text-left hover:bg-gray-50 transition-colors">
      Show more
    </button>
  </div>
);

const WhoToFollowSection = () => (
  <div className="bg-gray-50 rounded-2xl overflow-hidden">
    <h2 className="text-xl font-bold px-4 py-3 border-b border-gray-200">Who to follow</h2>
    
    {[1, 2, 3].map((i) => (
      <div key={i} className="px-4 py-3 hover:bg-gray-50 flex items-center justify-between transition-colors">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gray-300" />
          <div>
            <div className="font-bold text-gray-900">User Name</div>
            <div className="text-gray-500 text-sm">@username</div>
          </div>
        </div>
        <button className="bg-gray-900 text-white px-4 py-1.5 rounded-full text-sm font-bold hover:bg-gray-800 transition-colors">
          Follow
        </button>
      </div>
    ))}
    
    <button className="text-blue-500 hover:text-blue-600 px-4 py-3 w-full text-left hover:bg-gray-50 transition-colors">
      Show more
    </button>
  </div>
);

const Sidebar = () => {
  return (
    <div className="w-[350px] p-4 space-y-4 h-screen sticky top-0">
      <SearchBar />
      <PremiumCard />
      <WhatsHappeningSection />
      <WhoToFollowSection />
      
      <div className="px-4 py-3 text-sm text-gray-500 flex flex-wrap gap-2">
        <a href="#" className="hover:underline">Terms of Service</a>
        <a href="#" className="hover:underline">Privacy Policy</a>
        <a href="#" className="hover:underline">Cookie Policy</a>
        <a href="#" className="hover:underline">Accessibility</a>
        <a href="#" className="hover:underline">Ads info</a>
        <a href="#" className="hover:underline">More</a>
        <span>© 2024 Echo, Corp.</span>
      </div>
    </div>
  );
};

export default Sidebar;