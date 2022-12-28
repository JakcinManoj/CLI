// #!/usr/bin/env node


import inquirer from "inquirer";
import fs from "fs";
import { Command } from "commander";
const program = new Command();
import axios from "axios";
import { nanoid } from "nanoid";
import inquirerFileTreeSelection from 'inquirer-file-tree-selection-prompt';




const demoInquirer = () => {

    inquirer.registerPrompt('file-tree-selection', inquirerFileTreeSelection)
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "Enter your name:",
          validate: (input) => {
            if (input.length === 0) {
              return 'Please Enter your Name';
            }
            return true;
          },
        },
        {
          type: "input",
          name: "age",
          message: "Enter your age:",
          validate: (input) => {
            if (input.length === 0) {
              return 'Please Enter your age';
            }
            return true;
          },
        },
        {
          type: "list",
          name: "reptile",
          message: "Which is better?",
          choices: ["alligator", "crocodile"],
          
          
          //     hint: '- Space to select. Return to submit',
        },
        {
          type: "checkbox",
          name: "reptiles",
          message: "Which reptiles do you love?",
          choices: ["Alligators", "Snakes", "Turtles", "Lizards"],
          validate: (checkbox) => {
            if (checkbox.length === 0) {
              return 'Please make a choice';
            }
            return true;
          },
        },
        {
          type: "password",
          name: "secret",
          message: "Tell me a secret",
          mask: '*',
          validate: (password) => {
            if (password.length === 0) {
              return 'Please Enter Your Password';
            }
            return true;
          },
        },
        {
            type: 'file-tree-selection',
            name: 'location',
            message: 'Where is my phone?',
            tree: [
                {
                    value: "in the house",
                    open: true,
                    children: [
                        {
                            value: "in the living room",
                            children: [
                                "on the sofa",
                                "on the TV cabinet"
                            ]
                        },
                        {
                            value: "in the bedroom",
                            children: [
                                "under the bedclothes",
                                "on the bedside table"
                            ]
                        },
                        "in the bathroom"
                    ]
                },
                {
                    value: "in the car",
                    children: [
                        "on the dash",
                        "in the compartment",
                        "on the seat"
                    ]
                }
            ]
        },
      ])
      .then((answers) => {
        new fs.writeFile(
          `store/${nanoid(10)}.json`,
          JSON.stringify(answers),
          (error) => {
            if (!!error) {
              console.error(error);
              throw error;
            }
            console.log(JSON.stringify(answers));
          }
        );
      });
  };
  //demoInquirer();
  export default demoInquirer;