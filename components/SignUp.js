import React from 'react';
import './SignUp.css';  // Import CSS cho form đăng ký

const SignUp = ({ toggleLoginPopup }) => {
  return (
    <div className="signup-popup-overlay">
      <div className="signup-popup">
        {/* Nút Back to Login ở góc trái trên */}
        <button onClick={toggleLoginPopup} className="back-to-login-top">
          ← Back to Login
        </button>

        <span className="close-btn" onClick={toggleLoginPopup}>&times;</span>
        <h2>Create an Account</h2>
        <form>
          <label>First Name</label>
          <input type="text" placeholder="Enter your first name" required />

          <label>Last Name</label>
          <input type="text" placeholder="Enter your last name" required />

          <label>Email</label>
          <input type="email" placeholder="Enter your email" required />

          <label>Password</label>
          <input type="password" placeholder="Enter your password" required />

          <label>Confirm Password</label>
          <input type="password" placeholder="Confirm your password" required />

          <button type="submit" className="btn-create-account">
            Create an Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
