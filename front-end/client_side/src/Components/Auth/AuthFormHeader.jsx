const AuthFormHeader = ({ isLogin }) => {
    return (
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          {isLogin ? 'Welcome back!' : 'Join Echo today'}
        </h2>
        <p className="text-gray-600">
          {isLogin ? 'We\'re excited to see you again' : 'Start amplifying your voice'}
        </p>
      </div>
    );
  };
  export default AuthFormHeader;