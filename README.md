# Task Manager App

A simple authentication-based task manager built with **MERN + MySQL**.

## Tech Stack

- **Frontend:** React
- **Backend:** Node.js, Express
- **Database:** MySQL
- **Auth:** JWT + bcrypt

##  Features

- User registration & login (JWT)
- Add, view, delete tasks
- Auth-protected routes
- Password hashing with bcrypt

## Setup Instructions
### 1. Clone the Repository

```bash
git clone git@github.com:samriddhi004/Simple-Authentication-System-.git
cd Simple-Authentication-System
```

### 2. MySQL Database

Create a MySQL database named `tasks`, 
```sql
CREATE DATABASE tasks;
```

and run the following SQL:
```sql
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255),
  email VARCHAR(255) UNIQUE,
  password VARCHAR(255)
);

CREATE TABLE tasks (
  id INT AUTO_INCREMENT PRIMARY KEY,
  userId INT,
  title VARCHAR(255),
  description TEXT,
  FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE
);
```
### 3. Backend

```bash
cd backend
npm install
```
#### Create a .env file inside the backend/ folder:
```
DB_HOST=localhost
DB_USER=youruser
DB_PASS=yourpass
DB_NAME=taskdb
JWT_SECRET=your_jwt_secret
```

Start the backend server:
```
npx nodemon server.js
```
The backend will run at http://localhost:5000
### 4. Setup Frontend
```
cd ../frontend
npm install
npm start
```
The frontend will run at http://localhost:3000
