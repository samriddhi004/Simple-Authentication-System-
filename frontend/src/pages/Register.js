import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link} from "react-router-dom";
import { FaClipboardList } from 'react-icons/fa';
import '../LoginStyles.css';
function Register() {
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/register', form);
      alert(res.data.message);
      navigate('/');
    } catch (err) {
      alert(err.response.data.message || 'Error occurred');
    }
  };

  return (
    <div className="login-container">
      <div className="login-title"> 
      <span className="title-icon">
        <FaClipboardList size={60}  style={{ color: '#812f6a', position: 'relative', top: '7px', marginRight: '10px'     }}/>
    </span>
        Welcome to Task Manager!!</div>
      <div className="login-subtitle">Create Your Account</div>
      <div className="login-card">
        <form onSubmit={handleSubmit}>
          <input name="username" placeholder="Username" onChange={handleChange} required />
          <input name="email" placeholder="Email" onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
          <button type="submit">Register</button>
        </form>
        <div className="signup">
          Already have an account? <Link to="/">Login</Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
