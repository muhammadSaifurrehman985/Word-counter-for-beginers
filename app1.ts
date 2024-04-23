#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";

interface Sentence {
    answer: string;
}

async function question(){

    const sentence: Sentence = await inquirer.prompt([
        {
            name: "answer",
            type: "input",
            message: chalk.yellow("Hello sir, would you like to enter a sentence?")
        }
    ]);

    // Split the sentence into words 
    const words = sentence.answer.trim().split(" ");
    //Counting the words of the sentence
    console.log(chalk.green(`Sir, your total words are ${words.length}`));
}

// Calling the funstion
question();
