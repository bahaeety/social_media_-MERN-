import React, { useState } from 'react';
import EchoLogo from '../../assets/logo'
import AuthFormInput from '../../Components/Auth/AuthFormInput';
import SocialAuthButton from '../../Components/Auth/SocialAuthButton';
import AuthFormHeader from '../../Components/Auth/AuthFormHeader';
const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-8">
        <div className="flex justify-center mb-8">
          <EchoLogo width={200} height={70} />
        </div>

        <AuthFormHeader isLogin={isLogin} />

        <div className="space-y-6">
        {!isLogin && (
            <AuthFormInput
              label="Full Name"
              type="text"
              name="fullName"
             
              placeholder="Enter your full name"
            />
          )}

            <AuthFormInput
            label="Email Address"
            type="email"
            name="email"
          
          
            placeholder="Enter your email"
          />
          
          <AuthFormInput
            label="Password"
            type="password"
            name="password"
       
            placeholder="Enter your password"
          />

          {!isLogin && (
            <AuthFormInput
              label="Confirm Password"
              type="password"
              name="confirmPassword"
        
              placeholder="Confirm your password"
            />
          )}
          <div>
            <button
              type="submit"
              style={{ backgroundColor: '#1da1f2' }}
              className="w-full py-3 px-4 border border-transparent rounded-lg shadow-sm text-white font-medium hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
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
              provider="Google" 
              icon="/api/placeholder/20/20" 
            />
            <SocialAuthButton 
              provider="GitHub" 
              icon="/api/placeholder/20/20" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;