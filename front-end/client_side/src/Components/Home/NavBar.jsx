import React from 'react';
import { 
  Home, Search, Bell, Mail, Bookmark, 
  Users, User, MoreHorizontal, MessageSquare, 
  Briefcase, Star, Building
} from 'lucide-react';

const NavButton = ({ icon: Icon, label }) => {
  return (
    <button className="p-3 rounded-full hover:bg-blue-50 transition-colors inline-flex items-center gap-4 w-full group">
      <Icon 
        size={26} 
        className="text-gray-900 group-hover:text-blue-500 transition-colors"
      />
      <span className="text-xl group-hover:text-blue-500 transition-colors">
        {label}
      </span>
    </button>
  );
};

const NavBar = () => {
  return (
    <div className="w-72 p-2 flex flex-col h-screen">
      {/* Logo */}
      <div className="p-3 rounded-full hover:bg-blue-50 cursor-pointer transition-colors group">
        <svg 
          viewBox="0 0 24 24" 
          className="w-8 h-8 text-blue-500 group-hover:text-blue-600 transition-colors" 
          fill="currentColor"
        >
          <g>
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </g>
        </svg>
      </div>

      {/* Navigation Buttons */}
      <nav className="flex flex-col gap-1">
        <NavButton icon={Home} label="Home" />
        <NavButton icon={Search} label="Explore" />
        <NavButton icon={Bell} label="Notifications" />
        <NavButton icon={Mail} label="Messages" />
        <NavButton icon={Bookmark} label="Bookmarks" />
        <NavButton icon={Briefcase} label="Jobs" />
        <NavButton icon={Users} label="Communities" />
        <NavButton icon={Star} label="Premium" />
        <NavButton icon={Building} label="Verified Organizations" />
        <NavButton icon={User} label="Profile" />
        <NavButton icon={MoreHorizontal} label="More" />
      </nav>

      {/* Post Button */}
      <button className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-full py-3 text-lg font-bold mt-4 transition-colors">
        Post
      </button>

      {/* Profile Section */}
      <button className="mt-auto p-3 rounded-full hover:bg-blue-50 transition-colors flex items-center gap-3 w-full group">
        <div className="w-10 h-10 rounded-full bg-gray-300" />
        <div className="flex flex-col text-left">
          <span className="font-bold group-hover:text-blue-500 transition-colors">Username</span>
          <span className="text-gray-500">@handle</span>
        </div>
        <MoreHorizontal className="ml-auto group-hover:text-blue-500 transition-colors" />
      </button>
    </div>
  );
};

export default NavBar;