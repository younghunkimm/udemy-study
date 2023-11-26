// 생성자 함수입니다...
function Color(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
}

// 일반 함수처럼 스스로 호출하면...
Color(35, 60, 190); // undefined
// 정의되지 않은 상태를 반환합니다. 쓸모없는 것 같아요!

// *****************
// THE NEW OPERATOR!
// *****************

// 1. 비어 있는 일반 JavaScript 객체를 생성합니다.
// 2. 이 객체를 다른 객체에 연결(생성자를 설정)합니다.
// 3. 1단계에서 새로 생성된 객체를 this 컨텍스트로 전달합니다.
// 4. 함수가 자체 객체를 반환하지 않는 경우 이를 반환합니다.

// 고유의 복사본이 생기는게 아니라서 배열이나 문자열에서처럼 프로토타입 객체에서 액세스 할 수 있다. (참조)
Color.prototype.rgb = function() {
    const { r, g, b } = this;
    return `rgb(${r}, ${g}, ${b})`;
}

Color.prototype.hex = function() {
    const { r, g, b } = this;
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

Color.prototype.rgba = function(a = 1.0) {
    const { r, g, b } = this;
    return `rgb(${r}, ${g}, ${b}, ${a})`;
}

color1 = new Color(255, 0, 0);
console.log('color1:', color1);
console.log('color1.rgb:', color1.rgb());
console.log('color1.hex:', color1.hex());
console.log('color1.rgba:', color1.rgba(0.5));

color2 = new Color(0, 0, 0);
console.log('color2.rgb:', color2.rgb());
console.log('color2.hex:', color2.hex());


console.log(color1.hex === color2.hex) // true


document.body.style.backgroundColor = color1.rgb();
document.body.style.backgroundColor = color1.rgba(0.4);
document.body.style.backgroundColor = color1.rgba(0.2);