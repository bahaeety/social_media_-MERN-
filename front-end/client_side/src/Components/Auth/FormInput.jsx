export default function FormInput({ label,type, placeholder, name, value, onChange,error  }) {
  return (
    <div className="form-group">
      <label className="form-group__label">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        className={`form-group__input ${error ? 'form-group__input--error' : ''}`}
      />
      {error && <span className="form-group__error">{error}</span>}
    </div> 
  );

}