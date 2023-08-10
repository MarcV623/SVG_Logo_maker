const inquirer = require('inquirer')

const fs = require('fs')

const Circle = require('./lib/circle')
const Square = require('./lib/square')
const Triangle = require('./lib/triangle')

const questions = [
    {
        type: 'input', 
        message: 'What are your 3 text characters?',
        name: 'text' 
    },
    {
        type: 'input', 
        message: 'What is your text color?',
        name: 'text_color'
    },
    {
        type: 'list', 
        message: 'What shape are you using?',
        name: 'shape',
        choices: [
            'Square',
            'Triangle',
            'Circle'
        ]
    },
    {
        type: 'input', 
        message: 'What is your shape color?',
        name: 'shape_color'
    }
]

inquirer.prompt(questions).then((answers) => {
    let shape

    if (answers.shape === 'Circle') {
        shape = new Circle(answers.text, answers.text_color, answers.shape_color)
    }

    if (answers.shape === 'Square') {
        shape = new Square(answers.text, answers.text_color, answers.shape_color)
    }

    if (answers.shape === 'Triangle') {
        shape = new Triangle(answers.text, answers.text_color, answers.shape_color)
    }

    fs.writeFileSync('logo.svg', shape.render())
})
