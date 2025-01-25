import {useState, useEffect } from 'react';
import { Calendar, MapPin, Link, Mail, Phone, ArrowLeft, Camera } from 'lucide-react';
import ProfileTabs from './profile_tabs';

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState();
  useEffect(() => {
    const user = localStorage.getItem('user');
    setName(user);
  }, []);
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="flex items-center p-4 max-w-screen-xl mx-auto">
          <button className="hover:bg-gray-100 p-2 rounded-full">
            <ArrowLeft size={20} />
          </button>
          <div className="ml-6">
            <h1 className="text-xl font-bold">{name}</h1>
            <p className="text-sm text-gray-500">25 posts</p>
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto">
        <div className="relative mb-16">
          <div className="h-48 bg-blue-200">
            <img 
              src="/api/placeholder/800/200" 
              alt="Cover"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-16 left-4">
            <div className="relative">
              <img
                src="/api/placeholder/150/150"
                alt="Profile"
                className="w-32 h-32 rounded-full border-4 border-white shadow-md"
              />
              <button className="absolute bottom-2 right-2 p-2 bg-blue-500 rounded-full text-white hover:bg-blue-600">
                <Camera size={16} />
              </button>
            </div>
          </div>
          <div className="absolute top-4 right-4">
            <button 
              onClick={() => setIsEditing(!isEditing)}
              className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 font-medium"
            >
              Edit profile
            </button>
          </div>
        </div>

        {/* Profile Info */}
        <div className="px-4 mb-4">
          <div className="mb-4">
            <h1 className="text-xl font-bold">Bahae eddine Tayab</h1>
            <p className="text-gray-500">@bahaeety</p>
          </div>

          <p className="text-gray-800 mb-4 whitespace-pre-wrap">
            👨‍💻 Learning the art of Software Engineering 🌎
            Freelance Digital Marketer 🚀
            Balancing code and creativity ✨
            Let's connect and innovate! 😊 #TechWizard
          </p>

          <div className="grid gap-2 mb-4">
            <div className="flex items-center text-gray-500">
              <MapPin size={16} className="mr-2" />
              <span>Canada/Montreal</span>
            </div>
            <div className="flex items-center text-gray-500">
              <Link size={16} className="mr-2" />
              <a href="#" className="text-blue-500 hover:underline">bio.site/bahaeety</a>
            </div>
            <div className="flex items-center text-gray-500">
              <Calendar size={16} className="mr-2" />
              <span>Joined August 2023</span>
            </div>
            
          </div>

          <div className="flex gap-6">
            <button className="hover:underline">
              <span className="font-bold">25</span>
              <span className="text-gray-500 ml-1">Following</span>
            </button>
            <button className="hover:underline">
              <span className="font-bold">0</span>
              <span className="text-gray-500 ml-1">Followers</span>
            </button>
          </div>
        </div>

        {/* Tabs Section */}
        <ProfileTabs />
      </div>

      {/* Edit Modal */}
      {isEditing && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Edit Profile</h2>
              <button 
                onClick={() => setIsEditing(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <img
                  src="/api/placeholder/80/80"
                  alt="Profile"
                  className="w-20 h-20 rounded-full"
                />
                <button className="px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-50">
                  Change photo
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    defaultValue="Bahae eddine Tayab"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Bio
                  </label>
                  <textarea
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    rows={3}
                    defaultValue="👨‍💻 Learning the art of Software Engineering..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Location
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    defaultValue="Canada/Montreal"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Website
                  </label>
                  <input
                    type="url"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    defaultValue="https://bio.site/bahaeety"
                  />
                </div>
              </div>

              <div className="flex justify-end space-x-3 mt-6">
                <button 
                  onClick={() => setIsEditing(false)}
                  className="px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button className="px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;