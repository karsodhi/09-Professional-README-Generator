// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require("fs")
const produceReadme = (data)=> 
`
#${data.title}
${data.license}https://img.shields.io/badge/License-${data.license}-red.svg

## description
${data.description}

## table of contents
- [installation](#installation)

## installation
${data.installation}

## usage
${data.usage}

## license
${data.license}https://img.shields.io/badge/License-${data.license}-red.svg

## contributing
${data.contributing}

## tests
${data.tests}

## questions
${data.username}https://github.com/${data.username}

${data.email}

`
inquirer.prompt([
    {
        type:"input",
        message:"What is the title of your project?",
        name:"title",
        
    },
    {
        type:"input",
        message:"Give a description of your project",
        name:"description",
    },
       {
        type: "input",
        message: "What is your installation process?",
        name: "installation",
    },
    {
        type: "input",
        message: "What is the usage of this project?",
        name: "usage",
    },
    {
        type: "list",
        message: "What is your license?",
        name: "license",
        choices:["MIT","Apache_2.0","Boost_1.0"],
    },
    {
        type: "input",
        message: "What is contributing to this project?",
        name: "contributing",
    },
    {
        type: "input",
        message: "What tests are used in this project?",
        name: "tests",
    },
    {
        type: "input",
        message: "What is the usage of this project?",
        name: "usage",
    },
    {
        type: "input",
        message: "What is your github username?",
        name: "username",
    },
    {
        type: "input",
        message: "What is your email?",
        name: "email",
    },
])

.then((reply)=>{
    const readMeDetails = produceReadme(reply)
    fs.writeFile("Readme.md", readMeDetails, (error)=>
    error ? console.log(error) : 
    console.log("success")
    );
});