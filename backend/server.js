const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const db = require('./config/db'); 
dotenv.config();
const app = express();
app.use(cors({origin: 'http://localhost:3000',credentials: true}));
app.use(express.json());
app.use(cookieParser());
const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');
app.use(authRoutes);
app.use(taskRoutes);
app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
})
app.get('/test-users', async (req, res) => {
    try {
      const [users] = await db.query('SELECT * FROM users');
      res.json(users);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
