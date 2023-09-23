// Packages installed to connect to MySQL datatbase and interact with user via command line
const inquirer = require("inquirer");
const mysql = require("mysql2");

// Function to create a MySQL connection
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "rickysama",
    database: "employee_tracker",
});

// Function allowing to connect to database
connection.connect((err) => {
    if (err) throw err;
    console.log("Successfully connected to the database!");
    // Start Application
    start();
});