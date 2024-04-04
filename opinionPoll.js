import inquirer from "inquirer";
const questions = [
  {
    type: "input",
    name: "name",
    message: "What is your name?",
  },
  {
    type: "list",
    name: "language",
    message: "What is your favorite programming language?",
    choices: ["Javascript", "Python", "Java", "Other"],
  },
  {
    type: "list",
    name: "editor",
    message: "What is your preferred code editor?",
    choices: ["VS Code", "Sublime Text", "Atom", "Other"],
  },
  {
    type: "input",
    name: "feature",
    message: "What is one feature you wish your preferred code editor had?",
  },
];
inquirer
  .prompt(questions)
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log("Your name: " + answers.name);
    console.log("Your favorite programming language: " + answers.language);
    console.log("Your preferred code editor: " + answers.editor);
    console.log("Your feature: " + answers.feature);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
