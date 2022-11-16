// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
//questions to include readme content
const questions = [
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
        
        },
        {
            type: 'input',
            name: 'description',
            message: 'Write a description of what your project is about.',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Write instructions for the installation process.',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide examples for how to use, and instructions for the usage of your project.',
        },
        {
            type: 'input',
            name: 'contrbution',
            message: 'Provide infomration on how others can contribute to your project.',
        },
        {
            type: 'input',
            name: 'test',
            message: 'Provide instructions on how to test this project.',
        },
        {
            type: 'input',
            name: 'email',
            message: 'For questions (email)?.',
        },
        {
            type: 'list,',
            name: 'license',
            message: 'License?',
            choices: ['MIT', 'Mozilla Public License 2.0', 'GNU GPLv3', 'Apache License 2.0', 'Boost Software License 1.0'], 
            filter(value) {
                return value.toLowerCase();
            }
        },
        
];
    
// TODO: Create a function to write README file
  function writeToFile(fileName, data) {
    fs.writeFile('README.md', mark, (err) => 
    err ? console.error(err) : console.log('Success file created')); 
  };
  

// TODO: Create a function to initialize app
 function init() {
    return inquirer.prompt(questions)
        .then((data) => {
            const mark = generateMarkdown(data)
            console.log(mark)
            return data
        })
        .catch((error) => {
            console.log(error)
        })
 }

// Function call to initialize app
 init();
