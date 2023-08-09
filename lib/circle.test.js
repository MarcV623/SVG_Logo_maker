const Circle = require('./circle')

describe('Circle', () => {
    it('should render properly', () => {
        const shape = new Circle('XYZ', 'white', 'black')
        expect(shape.render()).toEqual(`<svg version='1.1' xmlns='http://www.w3.org/2000/svg'  width='300' height='200'><circle cx='150' cy='100' r='80' fill='black'/><text x='150' y='115' font-size='60' text-anchor='middle' fill='white'>XYZ</text></svg>`)
    })
})
