const Triangle = require('./triangle')

describe('Triangle', () => {
    it('should render properly', () => {
        const shape = new Triangle('MAV', 'yellow', 'pink')
        expect(shape.render()).toEqual(`<svg version='1.1' xmlns='http://www.w3.org/2000/svg'  width='300' height='200'><polygon points='150, 18 244, 182 56, 182' fill='pink'/><text x='150' y='130' font-size='60' text-anchor='middle' fill='yellow'>MAV</text></svg>`)
    })
})

