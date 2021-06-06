const mysql = require('mysql');
const inquirer = require('inquirer')
const cTable = require('console.table');


// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // Your MySQL username,
      user: 'root',
      // Your MySQL password
      password: 'Alexpaige2017#',
      database: 'employee_tracker'
    },
    console.log('Connected to the employee_tracker database.')
  );

  const firstPrompt= () => {
    return inquirer
        .prompt(
            {
                type: "list",
                name: "options",
                message: "Choose an option?",
                choices: [

                "View all departments", 
                'View all roles',
                'View all employees',
                'Add department',
                'Add role',
                'Add employee',
                'Update employee',
                'Exit']
            },
        )
    
            .then(function({options}) {
                switch(options) {

                    case "View all departments":
                    viewDepartments()
                    break;

                    case 'View all roles':
                    viewRoles()
                    break;

                    case 'View all employees':
                    viewEmployees()
                    break;

                    case 'Add Department':
                    addDepartment()
                    break;
                    
                    
                    case 'Add role':
                    addRole()
                    break;

                    case 'Add employee':
                    addEmployee();
                    break;

                    case 'Update employee':
                    updateEmployee();
                    break;

                    case 'Exit':
                    exit();
                    break;
                }
            })
            .catch();
        }

function viewDepartments() {
    
    var query = 'SELECT * FROM department'

    db.query(query, function (err, res) {
    if (err) throw err;

    console.table(res);
    console.log("Department viewed!");  
    firstPrompt();

})
};

function viewRoles() {
    
    var query = 'SELECT * FROM role'

    db.query(query, function (err, res) {
    if (err) throw err;

    console.table(res);
    console.log("Roles viewed!");  
    firstPrompt();

})
};

function viewEmployees() {
    
    var query = 'SELECT * FROM employee'

    db.query(query, function (err, res) {
    if (err) throw err;

    console.table(res);
    console.log("Roles viewed!");  
    firstPrompt();
})
};

function addDepartment() {


    inquirer.prompt([
        {
            type: "input",
            message: "What is the name of the department you want to add?",
            name: "deptName"
        }
    ])
    .then((answer) => {
        let sql = 'INSERT INTO department (name) VALUES (?)';
        
            db.query(sql, answer.deptName , (err, res) => {
            if (err) throw err;
            console.log('');
            firstPrompt()
    });
    });
};



firstPrompt();