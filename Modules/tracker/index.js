// required for fs and inquirer//
const fs = require('fs'); 
const inquirer = require('inquirer');

// link to generateHTML for index.html//
const generateHTML= require('./src/generateHTML.js');




fs.writeFile('index.html', generateHTML(name, github), err => {
    if (err) throw err;
  
    console.log('Portfolio complete! Check out index.html to see the output!');
  });

