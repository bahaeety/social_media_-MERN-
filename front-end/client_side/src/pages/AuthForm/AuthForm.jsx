import React, { useState } from 'react';
import EchoLogo from '../../assets/logo'
import AuthFormInput from '../../Components/Auth/AuthFormInput';
import SocialAuthButton from '../../Components/Auth/SocialAuthButton';
import AuthFormHeader from '../../Components/Auth/AuthFormHeader';
import { useNavigate } from 'react-router-dom';
//API
import {api} from '../../api/api';
const AuthForm = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [formData , setFormData] = useState({});
  const handleChange = (e) =>{
    setFormData({...formData, [e.target.name]: e.target.value}) 
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    if(Object.values(formData).some((value)=> value.trim() === '')){
      alert('Please fill all fields')
    }
    for(let value in formData){
      formData[value] = formData[value].trim()
    }
    if(isLogin){
    const Login = async() => {
       const response = await api.post('/user/login',formData);
       console.log(response)
       if(response.data.user2){
        localStorage.setItem('token', response.data.user1);
        localStorage.setItem('user', response.data.user2);
        navigate('/')
       }
    }
    Login();
    }
    else{
      const Register = async() => {
        const response = await api.post('/user/register',formData);
      }
      Register();
  }
}
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-8">
        <div className="flex justify-center mb-8">
          <EchoLogo width={200} height={70} />
        </div>

        <AuthFormHeader isLogin={isLogin} />

        <div className="space-y-6">
        {!isLogin && (
          <div className='flex gap-4'>
            <div className="flex-1">
            <AuthFormInput
              label="Full Name"
              type="text"
              name="fullName"
              value={formData.fullName}
              placeholder="Enter your full name"
              onChange={handleChange}
            />
             </div>
             <div className="flex-1">
            <AuthFormInput
            label={`Username`}
            type="text"
            name="username"
            value={formData.username}
            placeholder="Enter your username"
            onChange={handleChange}

          />
           </div>
           
          </div>
          )}
             <div className="flex gap-4">
             <div className="flex-1">
            <AuthFormInput
            label="Email Address"
            type="email"
            name="email"
            value={formData.email}
            placeholder="Enter your email"
            onChange={handleChange}

          />
          </div>
          
              {!isLogin && (
              <div className="flex-1">
               <AuthFormInput
                label="Phone number"
                type="text"
                name="phone_number"
                value={formData.phone_number}
                placeholder="Enter your phone number"
                onChange={handleChange}

          />
              </div>
            )}
          </div>
          <AuthFormInput
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            placeholder="Enter your password"
            onChange={handleChange}

          />
          {!isLogin && (
            <AuthFormInput
              label="Confirm Password"
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              placeholder="Confirm your password"
              onChange={handleChange}

            />
          )}
          <div>
            <button
              type="submit"
              style={{ backgroundColor: '#1da1f2' }}
              className="w-full py-3 px-4 border border-transparent rounded-lg shadow-sm text-white font-medium hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              onClick={handleSubmit}
            >
              {isLogin ? 'Sign In' : 'Create Account'}
            </button>
          </div>

          <div className="text-center">
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-blue-500 hover:text-blue-600 font-medium"
            >
              {isLogin ? 'Need an account? Sign up' : 'Already have an account? Sign in'}
            </button>
          </div>
        </div>

        <div className="mt-8">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">
                Or continue with
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
          <SocialAuthButton 
              provider="google"
              icon={
                <svg className="h-5 w-5" viewBox="0 0 48 48">
                  <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
                  <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
                  <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
                  <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
                </svg>
              }
            />
            <SocialAuthButton 
              provider="github"
              icon={
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;