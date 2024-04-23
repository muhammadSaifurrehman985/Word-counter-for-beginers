let boy = true;
if (boy) {
    console.log(`go and bring some bread`);
}
else {
    console.log `what ever you want you may do`;
}
let weather = "cloudy";
if (weather == "sunny") {
    console.log `go with the suns creame`;
}
else if (weather == "cloudy") {
    console.log("take a umbrella with you");
}
else {
    console.log("go without any precaution ");
}
import chalk from "chalk";
console.log(`do what you need`);
let saifHungry = false;
let saifi = saifHungry ? "take some food" : "take same water";
console.log(saifi);
let sapphire = false;
let shop = sapphire
    ? "let go for a shoping"
    : "sorry our this branch is closed";
console.log(shop);
let food = "biryaani";
switch (food) {
    case "biryani":
        console.log("yess surely i will have it it's my favorite");
        break;
    default:
        break;
}
function gardeninig() {
    //This area is called block of a function
    console.log("hello from typescript function");
}
gardeninig();
import inquirer from "inquirer";
async function saifii() {
    const saif = await inquirer.prompt([
        {
            name: "question1",
            type: "list",
            choices: ["cloudy", "hot", "rainy", "clear", "dusty", "nice weather"],
            message: "sir kindly which type of weather is here now"
        }
    ]);
    return saif.question1;
}
async function question() {
    const sentence = await inquirer.prompt([
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
