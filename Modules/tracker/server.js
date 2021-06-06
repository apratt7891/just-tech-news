const mysql = require('mysql');
const inquirer = require('inquirer')
const cTable = require('console.table');
const roleQuery = 'SELECT * from role; SELECT CONCAT (e.first_name," ",e.last_name) AS full_name FROM employee e';


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
                type: 'list',
                name: 'options',
                message: 'Choose an option?',
                choices: [

                'View all departments', 
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

                    case 'View all departments':
                    viewDepartments()
                    break;

                    case 'View all roles':
                    viewRoles()
                    break;

                    case 'View all employees':
                    viewEmployees()
                    break;

                    case 'Add department':
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


    return inquirer
    .prompt([
        {
            type: 'input',
            name: "addDepartment",
            message: "What is the name of the department you want to add?"
        }
    ])
    .then((answer) => {
        let sql = 'INSERT INTO department (name) VALUES (?)';
        
            db.query(sql, answer.addDepartment, (err, res) => {
            if (err) throw err;
            console.log('');

            firstPrompt()
    });
    });
};


const addRole = () => {
    const addRoleQuery = `SELECT * FROM role; SELECT * FROM department`
    db.query(addRoleQuery, (err, results) => {
        if (err) throw err;

        console.log('');
        console.table(chalk.yellow('List of current Roles:'), results[0]);

        inquirer.prompt([
            {
                name: 'newTitle',
                type: 'input',
                message: 'Enter the new Title:'
            },
            {
                name: 'newSalary',
                type: 'input',
                message: 'Enter the salary for the new Title:'
            },
            {
                name: 'dept',
                type: 'list',
                choices: function () {
                    let choiceArray = results[1].map(choice => choice.department_name);
                    return choiceArray;
                },
                message: 'Select the Department for this new Title:'
            }
        ]).then((answer) => {
            db.query(
                `INSERT INTO role(title, salary, department_id) 
                VALUES
                ("${answer.newTitle}", "${answer.newSalary}", 
                (SELECT id FROM department WHERE department_name = "${answer.dept}"));`
            )
            firstPrompt();

        })
    })

}


firstPrompt();