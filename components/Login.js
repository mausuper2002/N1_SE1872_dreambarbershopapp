import React, { useState } from 'react';
import './Login.css';  // Import CSS cho form đăng nhập
import SignUp from './SignUp';  // Import form Sign Up

const Login = () => {
  const [showLogin, setShowLogin] = useState(false);  // State quản lý hiện/ẩn form Login
  const [showSignUp, setShowSignUp] = useState(false);  // State quản lý hiện/ẩn form Sign Up

  // Hàm bật/tắt form đăng nhập
  const toggleLoginPopup = () => {
    setShowLogin(!showLogin);  // Đóng/mở form Login
    setShowSignUp(false);  // Đảm bảo form SignUp bị đóng khi form Login mở
  };

  // Hàm bật/tắt form đăng ký
  const toggleSignUpPopup = () => {
    setShowSignUp(!showSignUp);  // Đóng/mở form SignUp
    setShowLogin(false);  // Đóng form Login khi mở form SignUp
  };

  return (
    <div className="home-page">
      <header className="header">
        <nav className="top-nav">
          <div className="logo-container">
            <img src="/logo.png" alt="Logo" className="logo-image" />
          </div>
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/">About Us</a></li>
            <li><a href="/">Contact</a></li>
          </ul>
          <button onClick={toggleLoginPopup} className="signin-btn">Sign In</button>
        </nav>
      </header>

      {/* Form Login */}
      {showLogin && (
        <div className="login-popup-overlay">
          <div className="login-popup">
            <span className="close-btn" onClick={toggleLoginPopup}>&times;</span> {/* Nút đóng form */}
            <h2>Login</h2>
            <form>
              <label>Email</label>
              <input type="email" placeholder="Enter your email" required />

              <label>Password</label>
              <input type="password" placeholder="Enter your password" required />

              <div className="form-links">
              <button className="signup-link" onClick={toggleSignUpPopup}> Sign Up</button>                 
                <a href="/forgot-password" className="forgot-password-link">Forgot Password?</a>
              </div>

              <button type="submit" className="btn-continue">Continue</button>
            </form>
          </div>
        </div>
      )}

      {/* Form Sign Up */}
      {showSignUp && (
        <SignUp 
          toggleSignUp={toggleSignUpPopup}
          toggleLoginPopup={toggleLoginPopup}  // Truyền hàm để quay lại form Login
        />
      )}
    </div>
  );
};

export default Login;






