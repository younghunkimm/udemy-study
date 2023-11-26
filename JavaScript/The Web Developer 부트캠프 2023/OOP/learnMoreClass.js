class Color {
    constructor(r, g, b, name) { // 새로운 인스턴스를 인스턴스화할 때마다 즉시 실행되는 함수.
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
        this.calcHSL();
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
    
    hsl() {
        const { h, s, l } = this;
        return `hsl(${h}, ${s}%, ${l}%)`;
    }

    // MORE
    opposite() { // 대조색을 출력
        const { h, s, l } = this;
        const newHue = (h + 180) % 360;
        return `hsl(${newHue}, ${s}%, ${l}%)`;
    }

    fullySaturated() { // 채도를 100% 로 만들어 출력
        const { h, l } = this;
        return `hsl(${h}, 100%, ${l}%)`;
    }

    calcHSL() {
        let { r, g, b } = this;
        // r, g, b의 분수를 1로 만듭니다.
        r /= 255;
        g /= 255;
        b /= 255;

        // 최대 및 최소 채널 값 찾기
        let cmin = Math.min(r, g, b),
            cmax = Math.max(r, g, b),
            delta = cmax - cmin,
            h = 0,
            s = 0,
            l = 0;

        if (delta == 0) h = 0;
        else if (cmax == r)
            // Red is max
            h = ((g - b) / delta) % 6;
        else if (cmax == g)
            // Green is max
            h = (b - r) / delta + 2;
        else
            // Blue is max
            h = (r - g) / delta + 4;

        h = Math.round(h * 60);

        // 360도 뒤의 음수 색상을 양수로 만듭니다.
        if (h < 0) h += 360;
        // 밝기 계산
        l = (cmax + cmin) / 2;

        // 채도 계산
        s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

        // l과 s에 100을 곱합니다.
        s = +(s * 100).toFixed(1);
        l = +(l * 100).toFixed(1);
        this.h = h;
        this.s = s;
        this.l = l;
    }
}

const red = new Color(255, 67, 89, 'tomato');
const white = new Color(255, 255, 255, 'white');

// document.body.style.backgroundColor = red.hsl();
document.body.style.backgroundColor = red.opposite();

const orange = new Color(230, 126, 34, 'carrot');
document.body.style.backgroundColor = orange.fullySaturated();
document.body.style.backgroundColor = orange.opposite();