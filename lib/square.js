module.exports = class Square {
    constructor(text, text_color, shape_color) {
        this.text = text;
        this.text_color = text_color;
        this.shape_color = shape_color;
    }
  
    render() {
        return `<svg version='1.1' xmlns='http://www.w3.org/2000/svg'  width='300' height='200'><rect x='75' y='25' width='150' height='150' fill='${this.shape_color}'/><text x='150' y='115' font-size='60' text-anchor='middle' fill='${this.text_color}'>${this.text}</text></svg>`
    }
}