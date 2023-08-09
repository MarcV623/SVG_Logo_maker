module.exports = class Triangle {
    constructor(text, text_color, shape_color) {
        this.text = text;
        this.text_color = text_color;
        this.shape_color = shape_color;
    }
  
    render() {
        return `<svg version='1.1' xmlns='http://www.w3.org/2000/svg'  width='300' height='200'>
            <polygon points='150, 18 244, 182 56, 182' fill='${this.shape_color}'/>
            <text x='150' y='130' font-size='60' text-anchor='middle' fill='${this.text_color}'>${this.text}</text>
        </svg>`
    }
}