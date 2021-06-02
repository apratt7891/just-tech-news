// required for inquirer//
const inquirer = require('inquirer');


// team array//
const teamArray = [];

//options prompt//
const trackerOptions = () => {
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'option',
            message: "What would you like to do?",
            choices: [
                'View All Departments',
                'View All Employees',
                'View all Roles',
                'Add a Department',
                'Add a Role',
                'Add an Employee',
                'Update an Employee Role',
                ]
        }
    ])
    .then(answer) => {

    }
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



