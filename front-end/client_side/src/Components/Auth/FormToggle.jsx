export default function FormToggle  ({ isLogin, onToggle }) {
    return (
      <div className="auth__toggle">
        <button className="auth__toggle-button" onClick={onToggle}>
          {isLogin ? "Don't have an account? Sign up" : 'Already have an account? Sign in'}
        </button>
      </div>
    );
  };
  