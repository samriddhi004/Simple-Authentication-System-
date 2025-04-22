import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Layout.css';

function Layout({ children }) {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div className="layout">
      <header className="layout-header">
        <nav>
          {!token && <Link to="/">Login</Link>}
          {!token && <Link to="/register">Register</Link>}
          {token && <Link to="/dashboard">Dashboard</Link>}
          {token && <button onClick={handleLogout}>Logout</button>}
        </nav>
      </header>
      <main className="layout-main">
        {children}
      </main>
    </div>
  );
}

export default Layout;
