const mysql = require('mysql2'); //nodejs package 
const dotenv = require('dotenv');
dotenv.config();

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
});
db.connect((err)=>{
    if (err){
    console.log("Database connection failed ",err.message);
    }
    else {
        console.log("Database connection successful");
    }
});

module.exports = db;