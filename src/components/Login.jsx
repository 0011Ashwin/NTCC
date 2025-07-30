import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [view, setView] = useState('login'); // 'login' | 'forgot' | 'signup'
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Logging in:', { username, password, rememberMe });

    // Simulate login success
    localStorage.setItem('auth', 'true');
    navigate('/');
  };


  const handleForgotPassword = (e) => {
    e.preventDefault();
    console.log('Sending OTP to:', email);
    alert(`OTP sent to ${email} (simulated)`);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    console.log('Signing up:', { fullName, email, password });

    // Simulate signup success
    localStorage.setItem('auth', 'true');
    navigate('/');
  };

  return (
    <div className="login-container">
      {view === 'login' && (
        <form className="login-form" onSubmit={handleLogin}>
          <h2>Login</h2>

          <input
            type="text"
            placeholder="Username or Email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="login-options">
            <label>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />Remember </label>
            <span className="link" onClick={() => setView('forgot')}>
              Forgot Password?
            </span>
          </div>

          <button type="submit">Login</button>

          <p>
            Don&apos;t have an account?{' '}
            <span className="link" onClick={() => setView('signup')}>
              Sign Up
            </span>
          </p>
        </form>
      )}

      {view === 'forgot' && (
        <form className="login-form" onSubmit={handleForgotPassword}>
          <h2>Forgot Password</h2>
          <input
            type="email"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button type="submit">Send OTP</button>

          <p>
            Back to{' '}
            <span className="link" onClick={() => setView('login')}>
              Login
            </span>
          </p>
        </form>
      )}

      {view === 'signup' && (
        <form className="login-form" onSubmit={handleSignup}>
          <h2>Create an Account</h2>

          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Create Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Sign Up</button>

          <p>
            Already have an account?{' '}
            <span className="link" onClick={() => setView('login')}>
              Login
            </span>
          </p>
        </form>
      )}
    </div>
  );
};

export default Login;
