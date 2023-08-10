const Square = require('./square')

describe('Square', () => {
    it('should render properly', () => {
        const shape = new Square('ABC', 'red', 'purple')
        expect(shape.render()).toEqual(`<svg version='1.1' xmlns='http://www.w3.org/2000/svg'  width='300' height='200'><rect x='75' y='25' width='150' height='150' fill='purple'/><text x='150' y='115' font-size='60' text-anchor='middle' fill='red'>ABC</text></svg>`)
    })
})