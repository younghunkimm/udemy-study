function hex(r, g, b) {
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function rgb(r, g, b) {
    return `rgb(${r}, ${g}, ${b})`;
}

// hex(255, 100 ,25); -> #ff6419
// rgb(255, 100, 25); -> rgb(255, 100, 25)



/**
 * Factory Function
 * 
 * 호출할 때마다 새 객체를 반환하고
 * 해당 객체에다가 매번 고유의 개별 메서드를 각각 추가 (고유의 복사본)
 */
function makeColor(r, g ,b) {
    const color = {}

    color.r = r;
    color.g = g;
    color.b = b;

    color.rgb = function() {
        const { r, g, b } = this;
        return `rgb(${r}, ${g}, ${b})`;
    };

    color.hex = function () {
        const { r, g, b } = this;
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }

    return color;
}

const firstColor = makeColor(35, 255, 150);
console.log(firstColor.hex());
console.log(firstColor.rgb());
firstColor.r = 255;
console.log(firstColor.rgb());

const black = makeColor(0, 0, 0);
console.log(black.rgb());
console.log(black.hex());


/**
 * 해당 항목들이 같은 함수를 참조하고 있는지의 여부를 확인한다.
 * 
 * slice 는 모든 문자열에서 매번 정의되는게 아니기 때문에 true
 */
console.log(black.hex === firstColor.hex); // false
console.log("HI".slice === 'BYE'.slice) // true;