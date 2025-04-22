import React,{useState} from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import '../LoginStyles.css';
import { FaClipboardList } from 'react-icons/fa';

function Login () {
    const [form, setForm] = useState({email: '', password: ''});
    const navigate = useNavigate(); //redirect after login
    
    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const res = await axios.post('http://localhost:5000/login', form);

            // 🪵 Check the response
console.log('Logged in user:', res.data.user);

localStorage.setItem('token', res.data.token);
localStorage.setItem('user', JSON.stringify(res.data.user));

            localStorage.setItem('token', res.data.token);
            localStorage.setItem('user', JSON.stringify(res.data.user));
            alert(res.data.message);
            navigate('/dashboard');
        
        } catch(err){
            alert('Login failed!' || err.response.data.message);
        }
    };
    return (
      <div className="login-container">
      <div className="login-title">
      <span className="title-icon">
        <FaClipboardList size={60}  style={{ color: '#812f6a', position: 'relative', top: '7px', marginRight: '10px'     }}/>
    </span>TASK MANAGER</div>
      <div className="login-card">
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />
          <button type="submit">Login</button>
        </form>
        <div className="signup">
          Don’t have an account? <Link to="/register">Sign up</Link>
        </div>
      </div>
      </div>
      );
    }

export default Login;
