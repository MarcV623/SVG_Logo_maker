const inquirer = require('inquirer')

const fs = require('fs')

const Circle = require('./lib/circle')
const Square = require('./lib/square')
const Triangle = require('./lib/triangle')

const c = new Circle('mav', 'orange', 'pink')
const s = new Square('ABC', 'yellow', 'pink')
const t = new Triangle('XYZ', 'purple', 'brown')

console.log(c.render())
console.log(s.render())
console.log(t.render())

fs.writeFileSync('logo.svg', t.render())

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
    console.log(answers)
})
