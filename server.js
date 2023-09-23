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

// Function to begin employee tracker application
function start() {
    inquirer
        .prompt({
            type: "list",
            name: "action",
            message: "Please select the following options:",
            choices: [
                "View all departments",
                "View all roles",
                "View all employees",
                "Add a department",
                "Add a role",
                "Add an employee",
                "Update an employee role",
                "Exit",
            ],
        })

        .then((answer) => {
            switch (answer.action) {
                case "View all departments":
                    viewAllDepartments();
                    break;
                case "View all roles":
                    viewAllRoles();
                    break;
                case "View all employees":
                    viewAllEmployees();
                    break;
                case "Add a department":
                    addDepartment();
                    break;
                case "Add a role":
                    addRole();
                    break;
                case "Add an employee":
                    addEmployee();
                    break;
                case "Update an employee role":
                    updateEmployeeRole();
                    break;
                case "Exit":
                    connection.end();
                    console.log("Take care!");
                    break;
            }
        });
}