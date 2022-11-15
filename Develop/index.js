// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
//const generateMarkdown = require('./Develop/utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Write a description of what your project is about.',
            name: 'description',
            
        },
        {
            type: 'input',
            message: 'Write instructions for the installation process.',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'Provide examples for how to use, and instructions for the usage of your project.',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'Provide infomration on how others can contribute to your project.',
            name: 'contrbution',
        },
        {
            type: 'input',
            message: 'Provide instructions on how to test this project.',
            name: 'test',
        },
        {
            type: 'confirm,',
            message: 'What license do you want to include?',
            name: 'license',
            choices: ['MIT license', 'Mozilla Public License 2.0', 'GNU GPLv3', 'Apache License 2.0', 'Boost Software License 1.0'] 
        },

])
];

// TODO: Create a function to write README file
  function writeToFile(fileName, data) {
     const filename = `${data.name.toLowercase().split(' ').join('')}.json`;

      fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) => err ? console.log(err) : console.log('Successful')
      );
  };
  writeToFile(README.md, questions);

// TODO: Create a function to initialize app
 function init() {
    
 }

// Function call to initialize app
 init();
