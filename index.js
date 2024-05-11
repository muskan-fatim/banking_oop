#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let custom = await inquirer.prompt([{
        name: "name",
        type: "input",
        message: "Enter your name"
    }, {
        name: "last_name",
        type: "input",
        message: "Enter your last name"
    }, {
        name: "age",
        type: "input",
        message: "Enter your age "
    }, {
        name: "number",
        type: "input",
        message: "Enter your mobile number "
    }
]);
class user {
    name;
    last_name;
    age;
    mobile_number;
    constructor(name, last_name, age, mobile_number) {
        this.name = name;
        this.last_name = last_name;
        this.age = age;
        this.mobile_number = mobile_number;
    }
    hello() {
        return `welcome Mr/Miss ${this.name} ${this.last_name} your acces your mobile bank account`;
    }
}
let user1 = new user(custom.name, custom.last_name, custom.age, custom.number);
if (user1.age < 18) {
    console.log(chalk.red("your age must be 18 or above "));
}
else {
    console.log(chalk.green(user1.hello()));
    let amount = 100000;
    let bank = await inquirer.prompt([
        {
            name: "withdraw",
            type: "list",
            message: "what do you want to do ",
            choices: ["check balance", "transaction", "take loan", "purchase new debit card", "purchase atm card"]
        }
    ]);
    let pin = 56781;
    if (bank.withdraw === "transaction") {
        const transfer = await inquirer.prompt([
            {
                name: "trans",
                type: "list",
                message: "select which type of account  transfer you want to do",
                choices: ["jazz cash", "easypaisa", "bank"]
            }, {
                name: "num",
                type: "input",
                message: "Enter the account number"
            }, {
                name: "amount",
                type: "number",
                message: "Enter amount that you want to transfer"
            },
            {
                name: "pin",
                type: "number",
                message: "Enter your 5 digit pin "
            }
        ]);
        if (transfer.pin === pin) {
            console.log(chalk.magenta(`Dear ${user1.name} ${user1.last_name} ${transfer.amount} succesfuly transfer on ${transfer.trans} account ${transfer.num} your remaning balance is ${amount - transfer.amount}`));
        }
    }
    if (bank.withdraw === "check balance") {
        console.log(chalk.yellowBright(amount));
    }
    else if (bank.withdraw === "take loan") {
        const loan = await inquirer.prompt([
            {
                name: "take",
                type: "input",
                message: "Enter you CNIC number  for loan"
            }
        ]);
        console.log(chalk.cyan("your request have been submitted when your request is approve or reject we inform you into 2 working days"));
        if (bank.withdraw === "purchase new debit card") {
            console.log(chalk.bgBlue("The new debit card charges is 5000 pkr rupees"));
            let purchase = await inquirer.prompt([{
                    name: "purs",
                    type: "input",
                    message: "Enter your 5 digit pin for purchasing new  the debit card"
                }]);
            if (purchase.purs === pin) {
                console.log(chalk.green(`congratulation ${user1.name} ${user1.last_name} order is confirm your new debit card will be dilverd on 2 to 3 working days`));
                console.log(chalk.bgBlue(`your remaning balance is ${5000 - amount}`));
            }
        }
        if (bank.withdraw === "purchase atm card") {
            console.log(chalk.magentaBright("The atm card charges is 3000 pkr rupees"));
            let purchase = await inquirer.prompt([{
                    name: "purschase",
                    type: "input",
                    message: "Enter your 5 digit pin for purchasing new  the debit card"
                }]);
            if (purchase.purs === pin) {
                console.log(chalk.bgCyan(`congratulation ${user1.name}  ${user1.last_name} order is confirm your new atm card will be dilverd on 2 to 3 working days`));
                console.log(chalk.yellow(`your remaning balance is ${3000 - amount}`));
            }
        }
    }
}
