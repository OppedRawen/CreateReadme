// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generate = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input

//my list of questions
const questions = [
"What is the title of this project?",
"Description?",
"Table of content?(List what you did for the project)",
"Installation?",
"Usage",
"License(None, MIT, IBM, Mozilla)",
"Contribute",
"Test",
"Question"
];


// TODO: Create a function to write README file
function writeToFile(Read, data) {
  fs.writeFile(Read,data,(err)=>
  err ? console.log(err): console.log('Successfully created Readme'));
};



// TODO: Create a function to initialize app
//my init where Initialize the inquirer prompt with the list of questions
function init() {
  inquirer
  .prompt([
    {
      type: 'input',
      name: "title",
      message: questions[0],
    },
    {
      type: 'input',
      name: 'description',
      message: questions[1],
    },
    {
      type: 'input',
      name: 'tableOfContent',
      message: questions[2],
    },
    {
      type: 'input',
      name: 'installation',
      message: questions[3],
    },
    {
      type: 'input',
      name: 'usage',
      message: questions[4],
    },
    {
      type: 'input',
      name: 'license',
      message: questions[5],
    },
    {
      type: 'input',
      name: 'contributing',
      message: questions[6],
    },
    {
      type: 'input',
      name: 'tests',
      message: questions[7],
    },
    {
      type: 'input',
      name: 'questions',
      message: questions[8],
    },
  ])
  .then((answers)=>{
    const readme =generate(answers);
    const file = "README.md";
    writeToFile(file,readme);
  })
}

// Function call to initialize app
init();
