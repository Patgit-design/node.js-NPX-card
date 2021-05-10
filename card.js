const boxen = require("boxen");
const chalk = require("chalk");
const inquirer = require("inquirer");
const clear = require("clear");
const open = require("open");

// clear the terminal before showing the npx card
clear();


const data = {
    name: chalk.bold.green("                     CORDUANT Patricia"),
  
    fact: chalk.hex('#00A1D9')('I love CLI!'),
    facebook: chalk.hex('#00A1D9')("https://www.facebook.com/patricia.corduant"),
    github: chalk.hex('#787878')("https://github.com/Patgit-design"),
    linkdn: chalk.hex('#330093')("https://www.linkedin.com/in/patricia-corduant"),
    gmail: chalk.hex('#AB009C')("patricia.corduant@gmail.com"),
  
    npx: chalk.hex('#A1AB00')("npx patdesign"),

    labelFact: chalk.hex('#FF6262').bold("          Fun Fact:"),
    labelFacebook: chalk.hex('#629DFF').bold("       Facebook:"),
    labelGitHub: chalk.hex('#9E9E9E').bold("         GitHub:"),
    labelLinkdn: chalk.hex('#330093').bold("         Linkdn:"),
    labelGmail: chalk.hex('#F259FF').bold("          Gmail:"),

    labelCard: chalk.hex('#FFF976').bold("                  Card:")
};
const me = boxen(
    [
        `${data.name}`,
        ``,
        `${data.labelFact}  ${data.fact}`,
        ``,
        `${data.labelFacebook}  ${data.facebook}`,
        `${data.labelGitHub}  ${data.github}`,
        `${data.labelLinkdn}  ${data.linkdn}`,
       `${data.labelGmail}  ${data.gmail}`,
        ``,
        `${data.labelCard}  ${data.npx}`,
        ``,
        `${chalk.bold(
            "Hi there! I'm Patricia, I'm a passionate of modern tech. " 
        )}`,
        `${chalk.bold("Developer JR and Web designer from Belgium, and have a ")}`,
        `${chalk.bold(
            "hobby for creating beautiful, cool, and responsive "
        )}`,
        `${chalk.bold(
            "web apps. Send me an email if you want to collab!"
        )}`
    ].join("\n"),
    {
        margin: 1,
        float: 'center',
        padding: 1,
        borderStyle: "single",
        borderColor: "blue"
    }
);

// Show the boxen
console.log(me);