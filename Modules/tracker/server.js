// required for inquirer//
const inquirer = require('inquirer');

const mysql = require("mysql");
const consoleTable = require('console.table');

// Connect to database
const db = mysql.createConnection({
    host: 'localhost',
    // Your MySQL username,
    user: 'root',
    // Your MySQL password
    password: 'Alexpaige2017#',
    database: 'employee_tracker'
});


//options prompt//
const promptChoices = () => {
    return inquirer.prompt (

        {
            type: 'list',
            name: 'choice',
            message: "What would you like to do?",
            choices: [
                'View All Departments',
                'View All Employees',
                'View all Roles',
                'Add a Department',
                'Add a Role',
                'Add an Employee',
                'Update an Employee Role']
        },
    )




    .then(function({choice}) {
        switch (choice) {
            case "View all Departments":
                viewAllDept()
                break;

    
            case "View all Employees":
                viewAllEmployees()
                break;

            case "View all Roles":
                viewAllRoles()
                break; 
                   
            case "Add a Department":
                addDept()
                break;
               
            case "Add a Role":
                addRole()
                break;

            case "Add an Employees":
                addEmployee()
                break;

            case "Update an Employee Role":
                updateEmployeeRole()
                break;    
            }
        })   
        .catch();
}


function viewAllDept() {
        
        var query = 'SELECT * FROM department'
        
        db.query(query, function (err, res) {
            if (err) throw err;

        console.table(res);
        console.log('department viewed');    
        

}) 
};

function viewAllEmployees() {

    var query = 'SELECT * FROM employee'

    db.query(query, function (err, res) {
        if (err) throw err;

    console.table(res);
    console.log('department viewed'); 

})
};

promptChoices();