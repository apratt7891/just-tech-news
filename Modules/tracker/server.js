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
//first prompt// 
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
                'Delete Employee']
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

                    case 'Delete Employee':
                    deleteEmployee()
                    break;
                }
            })
            .catch();
  }


//view all departments// 
function viewDepartments() {
    
    var query = 'SELECT * FROM department'

    db.query(query, function (err, res) {
    if (err) throw err;

    console.table(res);
    console.log("Department viewed!");  
    firstPrompt();

})
};
//view all roles// 
function viewRoles() {
    
    var query = 'SELECT * FROM role'

    db.query(query, function (err, res) {
    if (err) throw err;

    console.table(res);
    console.log("Roles viewed!");  
    firstPrompt();

})
};
//View all Employees// 
function viewEmployees() {
    
    var query = 'SELECT * FROM employee'

    db.query(query, function (err, res) {
    if (err) throw err;

    console.table(res);
    console.log("Roles viewed!");  
    firstPrompt();
})
};
//Add Department// 
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
        let sql = 'INSERT INTO department (department_name) VALUES (?)';
        
            db.query(sql, answer.addDepartment, (err, res) => {
            if (err) throw err;
            console.log('');

            firstPrompt()
    });
    });
};

//Add Role// 
function addRole() { 
    db.query("SELECT role.title AS title, role.salary AS salary FROM role",   function(err, res) {
      inquirer.prompt([
          {
            type: 'input',
            name: 'title',
            message: "What is the title of the new role?"
          },
          {
            type: 'input',
            name: 'salary',
            message: "What is the salary of the new role?"
          } 
      ]).then(function(res) {
          db.query(
              "INSERT INTO role SET ?",
              {
                title: res.title,
                salary: res.salary,
                department_id: 1,
              },
              function(err) {
                  if (err) throw err
                  console.table(res);
                  firstPrompt();
              }
          )
  
      });
    });
    }   

    
//Add Emplopyee// 
function addEmployee() {
        inquirer
          .prompt([
            {
              type: "input",
              message: "Enter employee first name",
              name: "firstname"
            },
            {
              type: "input",
              message: "Enter employee last name",
              name: "lastname"
            }
          ])
          .then(function(answer) {
            db.query(
              "INSERT INTO employee SET ?",
              {
                first_name: answer.firstname,
                last_name: answer.lastname,
                role_id: 1,
                manager_id: 1
              },
              function(err, answer) {
                if (err) {
                  throw err;
                }
                console.table(answer);
              }
            );
            firstPrompt();
          });
}


//Update Employeee// 
function updateEmployee() {
      let allEmployeeList = [];
        db.query("SELECT * FROM employee", function(err, answer) {
         
          for (let i = 0; i < answer.length; i++) {
            let employeeString =
              answer[i].id + " " + answer[i].first_name + " " + answer[i].last_name;
            allEmployeeList.push(employeeString);
          }
        
      
          return inquirer
            .prompt([
              {
                type: 'list',
                name: 'updateEmpRole',
                message: "Select employee to update role",
                choices: allEmployeeList
              },
              {
                type: 'list',
                name: 'updateRole',
                message: 'Select employee new role',
                choices: ['Team Leader', 'Lead CCP', 'Engineer']
              }
            ])
            .then(function(answer) {
              console.log("Update Complete", answer);
              const idToUpdate = {};
              idToUpdate.employeeId = parseInt(answer.updateEmpRole.split(" ")[0]);
              if (answer.updateRole === "Team Leader") {
                idToUpdate.role_id = 1;
              } else if (answer.updateRole === "Lead CCP") {
                idToUpdate.role_id = 2;
              } else if (answer.updateRole === "Engineer") {
                idToUpdate.role_id = 3;
              db.query(
                "UPDATE employee SET role_id = ? WHERE id = ?",
                [idToUpdate.role_id, idToUpdate.employeeId],
                function(err, data) {
              
                  firstPrompt();
                
                }
            );
              }})
    });
  }






  firstPrompt(); 