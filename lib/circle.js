module.exports = class Circle {
    constructor(text, text_color, shape_color) {
        this.text = text;
        this.text_color = text_color;
        this.shape_color = shape_color;
    }
  
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="blue" />`
    }
}