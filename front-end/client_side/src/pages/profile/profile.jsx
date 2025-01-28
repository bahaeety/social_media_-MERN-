import React, { useState } from 'react';
import { Calendar, MapPin, Link, ArrowLeft } from 'lucide-react';
import ProfileTabs from './profile_tabs';
import {api} from '../../api/api';

const ProfilePage = () => {
  const [Info, setInfo] = useState({"name": "", "username": "", "email": "", "phone_number": "", "location": "", "website": "", "bio": "", "address": "", "image": ""});
  

  const [isEditing, setIsEditing] = useState(false);
  const [previewUrl, setPreviewUrl] = useState("https://www.gravatar.com/avatar/?d=mp");

  const [persistentImage, setPersistentImage] = useState(null); 
  const handleEditProfile = async () => {
    try {
      const updatedData = {};
      
      // Only include non-empty fields
      if (Info.name?.trim()) updatedData.fullname = Info.name;
      if (Info.username?.trim()) updatedData.username = Info.username;
      if (Info.phone_number?.trim()) updatedData.phone_number = Info.phone_number;
      if (Info.bio?.trim()) updatedData.bio = Info.bio;
      if (Info.address?.trim()) updatedData.adresse = Info.address;
      if (Info.location?.trim()) updatedData.location = Info.location;
      if (Info.website?.trim()) updatedData.website = Info.website;
      
      // Handle image
      if (Info.image) {
        console.log('Including image in update...');
        updatedData.image = Info.image;
      }
  
      console.log('Sending update data:', {
        ...updatedData,
        image: updatedData.image ? 'Image data present' : 'No image'
      });
  
      const response = await api.put('/user/update', updatedData);
      console.log('Update response:', response.data);
  
      if (response.status === 200) {
        // Update local storage
        if (updatedData.username) localStorage.setItem('user', updatedData.username);
        if (updatedData.fullname) localStorage.setItem('fullname', updatedData.fullname);
        
        if (response.data.user.image) {
          const fullImageUrl = `data:image/jpeg;base64,${response.data.user.image}`;
          setPersistentImage(fullImageUrl);
          setPreviewUrl(fullImageUrl);
        }
        
        
        
        setIsEditing(false);
        alert('Profile updated successfully!');
      }
    } catch (error) {
      console.error('Update error details:', error.response?.data || error.message);
      alert(error.response?.data?.message || 'Failed to update profile. Please try again.');
    }
  };
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="flex items-center p-4 max-w-screen-xl mx-auto">
          <Link to="/" className="hover:bg-gray-100 p-2 rounded-full inline-flex">
            <ArrowLeft size={20} />
          </Link>
          <div className="ml-6">
            <h1 className="text-xl font-bold">{localStorage.getItem('fullname')}</h1>
            <p className="text-sm text-gray-500">25 posts</p>
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto">
        {/* Cover & Profile Image */}
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
    src={persistentImage}
    alt="Profile"
    className="w-32 h-32 rounded-full border-4 border-white shadow-md"
   
           />
            
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
            <h1 className="text-xl font-bold">{localStorage.getItem('fullname')}</h1>
            <p className="text-gray-500">@{localStorage.getItem('user')}</p>
          </div>

          <p className="text-gray-800 mb-4 whitespace-pre-wrap">
            👨‍💻 Learning the art of Software Engineering 🌎
            Freelance Digital Marketer 🚀
            Balancing code and creativity ✨
            Let's connect and innovate! 😊 #TechWizard
          </p>

          <div className="grid gap-2 mb-4">
            <div className="flex items-center text-gray-500">
              <MapPin size={16} className="mr-2 text-blue-500" />
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
           

              <div className="space-y-4">
                {/* Profile Image */}
                <div className="flex items-center space-x-4 mb-6">
                  <img
                    src={previewUrl}
                    alt="Profile"
                    className="w-20 h-20 rounded-full object-cover bg-gray-200"
                  />
                  <label className="relative">
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          // Update preview
                          setPreviewUrl(URL.createObjectURL(file));
                          
                          // Convert to proper base64
                          const reader = new FileReader();
                          reader.onloadend = () => {
                            // Ensure we're sending a clean base64 string
                            const base64String = reader.result;
                            setInfo(prevInfo => ({
                              ...prevInfo,
                              image: base64String // This will include the data:image/jpeg;base64 prefix
                            }));
                          };
                          reader.readAsDataURL(file);
                        }
                      }}
                    />
                    <span className="px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-50 cursor-pointer inline-block">
                      Change photo
                    </span>
                  </label>
                </div>

                {/* Two columns layout */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      defaultValue={localStorage.getItem('fullname')}
                      onChange={(e) => setInfo({ ...Info, name: e.target.value })}
                      value={Info.name}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Username
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      defaultValue={localStorage.getItem('user')}
                      onChange={(e) => setInfo({ ...Info, username: e.target.value })}
                      value={Info.username}

                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      defaultValue="bahae@example.com"
                      onChange={(e) => setInfo({ ...Info, email: e.target.value })}
                      value={Info.email}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      defaultValue="+1 234-567-8900"
                      onChange={(e) => setInfo({ ...Info, phone_number: e.target.value })}
                      value={Info.phone_number}
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
                      onChange={(e) => setInfo({ ...Info, location: e.target.value })}
                      value={Info.location}
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
                      onChange={(e) => setInfo({ ...Info, website: e.target.value })}
                      value={Info.website}

                    />
                  </div>
                </div>

                {/* Full width fields */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Address
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    defaultValue=""
                    placeholder="Enter your address"
                    onChange={(e) => setInfo({ ...Info, address: e.target.value })}
                    value={Info.address}
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
                    onChange={(e) => setInfo({ ...Info, bio: e.target.value })}
                    value={Info.bio}
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
                <button className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600" onClick={()=>{handleEditProfile()}}>
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