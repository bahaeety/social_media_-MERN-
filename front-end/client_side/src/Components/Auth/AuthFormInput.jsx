const AuthFormInput = ({ label, type, name, placeholder, value, onChange }) => {
    return (
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent"
          placeholder={placeholder}
        />
      </div>
    );
  };
export default AuthFormInput;  