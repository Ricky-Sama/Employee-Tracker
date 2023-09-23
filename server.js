//Packages installed to connect to MySQL datatbase and interact with user via command line
const inquirer = require("inquirer");
const mysql = require("mysql2");

// create a MySQL connection
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "rickysama",
    database: "employee_tracker",
});

// connect to the database
connection.connect((err) => {
    if (err) throw err;
    console.log("Successfully connected to the database!");
    // start the application
    start();
});