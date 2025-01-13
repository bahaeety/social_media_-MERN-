export default function SubmitButton  ({ isLogin, loading }){
    return (
      <button 
        type="submit" 
        className={`submit-button ${loading ? 'submit-button--loading' : ''}`}
        disabled={loading}
      >
        {isLogin ? 'Sign in' : 'Sign up'}
      </button>
    );
  };