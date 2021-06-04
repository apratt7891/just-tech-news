// required for inquirer//
const inquirer = require('inquirer');

const mysql = require("mysql");
const cTable = require('console.table');

// Connect to database
const db = mysql.createConnection({
    host: 'localhost',
    // Your MySQL username,
    user: 'root',
    // Your MySQL password
    password: 'Alexpaige2017#',
    database: 'employee'
});


//options prompt//
const trackerOptions = () => {
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'trackerOption',
            message: "What would you like to do?",
            choices: [
                'View All Departments',
                'View All Employees',
                'View all Roles',
                'Add a Department',
                'Add a Role',
                'Add an Employee',
                'Update an Employee Role']
        }
    ])




    .then((answer) => {
        switch (answer.trackerOptions) {
            case "View all Departments":
                viewAllDept();
                break;

    
            case "View all Employees":
                viewAllEmployee();
                break;

            case "View all Roles":
                viewAllRoles();
                break; 
                   
            case "Add a Department":
                addDept();
                break;
               
            case "Add a Role":
                addRole();
                break;

            case "Add an Employees":
                addEmployee();
                break;

            case "Update an Employee Role":
                updateEmployeeRole();
                break;    
            }
        })   
}

function viewAllDept () {
    db.query('SELECT * FROM department', function (err, results) {
        console.log(results);
    





}) 
}
