class Color {
    constructor(r, g, b, name) { // 새로운 인스턴스를 인스턴스화할 때마다 즉시 실행되는 함수.
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
    }

    innerRGB() {
        const { r, g, b } = this;
        return `${r}, ${g}, ${b}`;
    }

    rgb() {
        return `rgb(${this.innerRGB()})`;
    }

    hex() {
        const { r, g, b } = this;
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }

    rgba(a = 1.0) {
        return `rgba(${this.innerRGB()}, ${a})`;
    }

    greet() { // constructorFunction.js ==> Color.prototype.greet = func...
        return `HELLO FROM ${this.name}!`;
    }
}

const tomato = new Color(255, 67, 89, 'tomato');
console.log(tomato);
console.log(tomato.greet());
console.log(tomato.rgba(0.5));


const white = new Color(255, 255, 255, 'white');
console.log(white.greet());
console.log(white.rgb());
console.log(white.hex());



console.log(tomato.hex === white.hex); // true



document.body.style.backgroundColor = tomato.rgba(0.3);