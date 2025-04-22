import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaClipboardList } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import '../LoginStyles.css';

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [form, setForm] = useState({ title: '', description: '' });
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return navigate('/');

    axios.get('http://localhost:5000/tasks', {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(res => setTasks(res.data))
    .catch(err => {
      alert('Session expired or invalid');
      localStorage.removeItem('token');
      navigate('/');
    });

    // Dummy username (you can fetch actual user data if needed)
    const user = JSON.parse(localStorage.getItem('user'));
    setUsername(user?.username || 'User');
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    try {
      await axios.post('http://localhost:5000/tasks', form, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setForm({ title: '', description: '' });

      const res = await axios.get('http://localhost:5000/tasks', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setTasks(res.data);
    } catch (err) {
      alert('Failed to add task');
    }
  };

  const handleDelete = async (id) => {
    const token = localStorage.getItem('token');

    try {
      await axios.delete(`http://localhost:5000/tasks/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setTasks(tasks.filter(task => task.id !== id));
    } catch (err) {
      alert('Failed to delete task');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <>
  <div className="dashboard-header">
  <div className="brand-title">
  <FaClipboardList className='brand-icon' />
  Task Manager</div>
  <div className="header-actions">
  <button className="logout-btn-header" onClick={handleLogout}>Logout</button>
  </div>
</div>
    <div className="login-container">
      <div className="login-title">Welcome, {username}!</div>
      <div className="login-subtitle">Manage your tasks below</div>

      <div className="login-card">
        <form onSubmit={handleSubmit}>
          <input
            name="title"
            placeholder="Task Title"
            value={form.title}
            onChange={e => setForm({ ...form, title: e.target.value })}
            required
          />
          <textarea
            name="description"
            placeholder="Task Description"
            value={form.description}
            onChange={e => setForm({ ...form, description: e.target.value })}
            rows={2}
          />
          <button type="submit">Add Task</button>
        </form>
      </div>

      <ul className="task-list">
        {tasks.map(task => (
          <li key={task.id} className="task-card">
            <div>
              <strong>{task.title}</strong>
              <p>{task.description}</p>
            </div>
            <button className="delete-btn" onClick={() => handleDelete(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
    </>
  );
}

export default Dashboard;
