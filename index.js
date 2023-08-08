const inquirer = require('inquirer')

const questions = [
    {
        type: 'input', 
        message: 'What is your project title?',
        name: 'title' 
    },
    {
        type: 'input', 
        message: 'What does your project do?',
        name: 'description'
    },
    {
        type: 'input', 
        message: 'What is your GitHub username?',
        name: 'username'
    },
    {
        type: 'input', 
        message: 'What is your email address?',
        name: 'email'
    },
    {
        type: 'list', 
        message: 'What license for your application will be used?',
        name: 'license',
        choices: [
            'MIT',
            'GPLv3',
            'ISC'
        ]
    },
    {
        type: 'input', 
        message: 'How is your project installed?',
        name: 'installion'
    },
    {
        type: 'input', 
        message: 'How do you start your application?',
        name: 'usage'
    },
    {
        type: 'input', 
        message: 'What are your contribution guidelines?',
        name: 'contributing'
    },
    {
        type: 'input', 
        message: 'what are your test instructions?',
        name: 'tests'
    }
]

inquirer.prompt(questions).then((answers) => {
    console.log(answers)
})
