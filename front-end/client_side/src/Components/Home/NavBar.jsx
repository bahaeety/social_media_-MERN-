import { 
  Home, Search, Bell, Mail, Bookmark, 
  Users, User, MoreHorizontal, 
  LogOut , Star, Building
} from 'lucide-react';
import {Link} from 'react-router-dom'
import EchoLogo from '../../assets/logo_icon';
import {useNavigate} from 'react-router-dom';
import { useState } from 'react';
//API
import {api} from '../../api/api';
import { useEffect } from 'react';

const NavButton = ({onClick = null,icon: Icon, label }) => {
  if(onClick === null){
    onClick = () => {}
  }
  return (
    <button className="p-3 rounded-full hover:bg-blue-50 transition-colors inline-flex items-center gap-4 w-full group" onClick={()=>onClick()}>
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
  const navigate = useNavigate();
  const [user, setUser] = useState('');
  const [fullname, setFullName] = useState('');
  const handleLogOut = async () => {
    console.log('Logging Out')
    const logout = await api.post('/user/logout');
     if(logout.data){
      console.log('Logged Out')
     localStorage.removeItem('user');
     navigate('/login')
        }
   }
   useEffect(() => {
    const user = localStorage.getItem('user');
    const fullname = localStorage.getItem('fullname');
    setUser(user);
    setFullName(fullname);
  }
  , []);
  return (
    <div className="w-72 p-2 flex flex-col h-screen">
      <div className=" rounded-full hover:bg-blue-50 cursor-pointer transition-colors group">
      <EchoLogo height={80}/>
      </div>

      {/* Navigation Buttons */}
      <nav className="flex flex-col gap-1">
        <NavButton icon={Home} label="Home" />
        <NavButton icon={Search} label="Explore" />
        <NavButton icon={Bell} label="Notifications" />
       <Link to="messaging"><NavButton icon={Mail} label="Messages" /></Link> 
        <NavButton icon={Bookmark} label="Bookmarks" />
        <NavButton icon={Users} label="Communities" />
        <NavButton icon={Star} label="Premium" />
        <NavButton icon={Building} label="Verified Organizations" />
        <Link to="profile"><NavButton icon={User} label="Profile" /></Link> 
        <NavButton icon={LogOut} label="Log Out" onClick={handleLogOut} /> 
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
          <span className="font-bold group-hover:text-blue-500 transition-colors">{fullname}</span>
          <span className="text-gray-500">@{user}</span>
        </div>
        <MoreHorizontal className="ml-auto group-hover:text-blue-500 transition-colors" />
      </button>
    </div>
  );
};

export default NavBar;