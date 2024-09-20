// Include required package
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from 'C:/Users/jquin/Downloads/2024_bootcamp/UNCC-VIRT-FSF-PT-07-2024-U-LOLC/07-NodeJS/02-Challenge/Develop/utils/generateMarkdown';

// Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide usage information:',
    },
    {
        type: 'list', // Change to list type for licenses
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'GPLv3', 'Apache 2.0', 'BSD 3-Clause', 'None'],
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What are the contribution guidelines?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'What are the test instructions?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
];

// Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error('Error writing file:', err);
        } else {
            console.log('File written successfully');
        }
    });
}

// Function to initialize app
function init() {
    inquirer.prompt(questions).then(async (answers) => {
        try {
            // Import and use the generateMarkdown function from the second file
            const { default: generateMarkdown } = await import('./generateMarkdown.js'); 
            const markdown = generateMarkdown(answers); // Pass answers to generateMarkdown
            writeToFile('README.md', markdown);
        } catch (error) {
            console.error('Error importing generateMarkdown:', error);
        }
    }).catch((error) => {
        console.error('Error initializing app:', error);
    });
}

// Function call to initialize app
init();

