// TODO: Include packages needed for this application

const inquirer = require("inquirer")
const axios = require("axios");
const fs = require("fs");
var generateMarkdown = require ("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "confirm",
        message: "Welcome to @DerekBanister's README Generator. Would you like to create a README.md file?",
        name: "create"
    },
    {
        type: "input",
        message: "What is your Github username?",
        name: "username"
    },
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "What is the name of your GitHub repository?",
        name: "repo",
    },
    {
        type: "input",
        message: "Write a short description of what your project does",
        name: "description"
    },
    {
        type: "input",
        message: "What steps are needed to install your project?",
        name: "install"
    },
    {
        type: "input",
        message: "Write instructions for how to use your project",
        name: "use"
    },
    {
        type: "input",
        message: "Enter the names of any contributors that helped with your project",
        name: "contribute"
    },
    {
        type: "input",
        message: "Provide examples for testing of this application",
        name: "test"
    },
    {
        type: "input",
        message: "Enter your email in case anybody would like to contact you regarding your project",
        name: "email"
    },
    {
        //https://choosealicense.com/
        //https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository
        type: "list",
        message: "Which license would you like to use?",
        choices: ["MIT", "Apache 2.0", "Mozilla Public 2.0", "GNU GPLv3"],
        name: "license"
    }

];
function init() {
    inquirer.prompt(questions)
    .then(answers => {
        console.log(answers);
        //answers logging, questions showing correctly, default's are weird though.
        //need to use axios to get github username, then response for profile image.
        //next is writefile.
        axios
        .get("https://api.github.com/users/" + answers.username)
        .then(response => {
            //console.log(response);
            //will put avatar in README
            var imageURL = response.data.avatar_url;
            answers.image = imageURL;
            console.log(imageURL)
            // TODO: Create a function to write README file
            fs.writeFile("README-demo.md", generateMarkdown(answers), (err) =>
            err ? console.error(err) : console.log('Success!'),
          );
        })
    })
}
// Function call to initialize app
init();