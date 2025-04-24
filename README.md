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
### 2. Backend

```bash
cd backend
npm install
```
## Create a .env file inside the backend/ folder:
```
DB_HOST=localhost
DB_USER=youruser
DB_PASS=yourpass
DB_NAME=taskdb
JWT_SECRET=your_jwt_secret
```
## Create the database manually in MySQL:
```
CREATE DATABASE taskdb;
```
Start the backend server:
```
npm start
```
The backend will run at http://localhost:5000
### 3. Setup Frontend
```
cd ../frontend
npm install
npm start
```
The frontend will run at http://localhost:3000
