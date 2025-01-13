import  { useState } from 'react';
import  FormInput  from '../../Components/Auth/FormInput';
import  ImageUpload  from '../../Components/Auth/ImageUpload';
import  FormToggle  from '../../Components/Auth/FormToggle';
import  Logo  from '../../assets/logo';
import  SubmitButton  from '../../Components/Auth/SubmitButton';
import '../../styles/auth.css';

const AuthForm  = () =>{
    const [isLogin, setIsLogin] = useState(true);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        email: '',
        password: ''
      });
    const [errors, setErrors] = useState({});
  const [imagePreview, setImagePreview] = useState(null);
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  }
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
  }
  return (
    <div className='auth'>
              <div className="auth__form">
                <Logo />
            </div>
            <h2 className="auth__title">
          {isLogin ? 'Sign in to Twitter' : 'Join Twitter today'}
            </h2>
            <form onSubmit={handleSubmit}>
            {!isLogin && (
                <>
                 <ImageUpload 
                 imagePreview={imagePreview}
                 onImageChange={handleImageChange}
               />
                <FormInput 
                label="Full Name"
                value = {formData.name}
                onChange = {handleInputChange}
                name = "name"       
                type = "text" 
                error={errors.name}               
                />
                <FormInput
                label= "Username"
                value = {formData.username}
                onChange = {handleInputChange}
                name = "username"
                type = "text"
                error={errors.username}/>
                </>
            ) }
            <FormInput
            label="Email"
            value = {formData.email}
            onChange = {handleInputChange}
            name = "email"
            type = "email"
            error={errors.email}/>
            <FormInput
            label="Password"
            value = {formData.password}
            onChange = {handleInputChange}
            name = "password"
            type = "password"
            error={errors.password}/>
            {errors.submit && (
            <div className="form-group__error">{errors.submit}</div>
          )}
          <SubmitButton isLogin={isLogin} loading={loading} />
          </form>
          <FormToggle 
          isLogin={isLogin} 
          onToggle={() => setIsLogin(!isLogin)} 
        />
    </div>
  )
} 
export default AuthForm;
