module.exports = class Circle {
    constructor(text, text_color, shape_color) {
        this.text = text;
        this.text_color = text_color;
        this.shape_color = shape_color;
    }
  
    render() {
        return `<svg version='1.1' xmlns='http://www.w3.org/2000/svg'  width='300' height='200'>
            <circle cx='150' cy='100' r='80' fill='green'/>
            <text x='150' y='115' font-size='60' text-anchor='middle' fill='white'>SVG</text>
        </svg>`
    }
}
