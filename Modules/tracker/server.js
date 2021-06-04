// required for inquirer//
const inquirer = require('inquirer');



// team array//
const teamArray = [];

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
                'Update an Employee Role'
                ]



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

const viewAllDept = () => {
    let deptQuery = 'SELECT * FROM department';
    connection.query(deptQuery, (err, results) => {
        if(err) throw err;
    
        return inquirer.prompt([
            [
                name: 
            ]
        ])




}) 
}
const departmentName = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'department',
            message: "What department would you like to add?",
        }) 
    .then(answer) => {

const addRole = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'role',
            message: "What Role would you like to add?",
        }) 
    .then(answer) => {


const addEmployee = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'role',
            message: "What Employee would you like to add?",
        }) 
    .then(answer) => {        


const updateEmployeeRole = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'role',
            message: "Select and employee: ",
        }) 
    .then(answer) => { 



