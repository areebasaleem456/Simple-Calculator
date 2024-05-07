#!/usr/bin/env node
import inquirer from "inquirer";
//ASKING QUESTIONS FROM USERS THROUGH INQUIRER
let answers = await inquirer.prompt([
    { message: "Enter First Number", type: "number", name: "firstNumber" },
    { message: "Enter Second Number", type: "number", name: "secondNumber" },
    {
        message: "Select one operator to perform Operation.",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
// CONDITIONS FOR RESULT
if (answers.operator === "Addition") {
    console.log(answers.firstNumber + answers.secondNumber);
}
else if (answers.operator === "Subtraction") {
    console.log(answers.firstNumber - answers.secondNumber);
}
else if (answers.operator === "Multiplication") {
    console.log(answers.firstNumber * answers.secondNumber);
}
else if (answers.operator === "Division") {
    console.log(answers.firstNumber / answers.secondNumber);
}
else {
    "Invalid Output";
}
