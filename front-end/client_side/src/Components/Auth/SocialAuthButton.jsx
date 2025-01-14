const SocialAuthButton = ({ provider, icon }) => {
    return (
      <button className="w-full inline-flex justify-center py-3 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
        <img
          className="h-5 w-5"
          src={icon}
          alt={provider}
        />
        <span className="ml-2">{provider}</span>
      </button>
    );
  };
  export default SocialAuthButton;