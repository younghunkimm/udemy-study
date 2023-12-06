const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/shopApp')
.then(() => {
    console.log("CONNECTION OPEN!!!")
})
.catch(err => {
    console.log("OH NO ERROR!!!!");
    console.log(err);
});

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 20
    },
    price: {
        type: Number,
        required: true,
        min: [0, 'Price must be positive ya dodo!'] // 2번째 인수로 커스텀 에러메세지를 설정할 수 있다.
    },
    onSale: {
        type: Boolean,
        default: false
    },
    categories: [String],
    qty: {
        online: {
            type: Number,
            default: 0
        },
        inStore: {
            type: Number,
            default: 0
        }
    },
    size: {
        type: String,
        enum: ['S', 'M', 'L']
    }
});

/**
 * 인스턴스 메서드
 * 
 * 1. node
 * 2. .load product.js
 * 3. const p = new Product({name: 'bike bag', price: 10});
 * 4. p.greet();
 */
productSchema.methods.greet = function() {
    console.log("HELLO!!! HI!! HOWDY!!!");
    console.log(`- from ${this.name}`);
}

productSchema.methods.toggleOnSale = function() {
    // this 는 Product 의 특정 인스턴스를 가르킨다.
    this.onSale = !this.onSale;
    return this.save(); // 비동기 처리를 위해 Promise (thenable 이지만 Promise 처럼 작동) 를 반환
}

productSchema.methods.addCategory = function(newCat) {
    this.categories.push(newCat);
    return this.save();
}

/**
 * 정적 메서드
 * 
 * 좀 더 편하고 유용한 방식으로 찾기, 업데이트, 삭제 등의 작업을 하는 거기 때문에
 * 클래스나 모델 자체에 메서드를 적용하고 추가한다.
 */
productSchema.statics.fireSale = function() {
    return this.updateMany({}, { onSale: true, price: 0 });
}

const Product = mongoose.model('Product', productSchema);

/**
 * 1. node product.js
 * 
 * this.name 값이 출력된다
 */
const findProduct = async () => {
    const foundProduct = await Product.findOne({ name: 'Mountain Bike' });

    // onSale 을 토글하는 기능
    console.log(foundProduct);
    await foundProduct.toggleOnSale(); // save() 시간이 좀 걸리기 때문에 비동기로 처리
    console.log(foundProduct);
    // Categories 배열에 요소를 추가
    await foundProduct.addCategory('Outdoors');
    console.log(foundProduct);

    foundProduct.greet();
}
// findProduct();

Product.fireSale().then(res => console.log(res));


// const bike = new Product({ name: 'Cycling Jersey', price: 28.50, categories: ['Cycling', 'Safety'], size: 'S' });
// bike.save()
// .then(data => {
//     console.log("IT WORKED!");
//     console.log(data);
// })
// .catch(err => {
//     console.log("OH NO ERROR!");
//     console.log(err);
// })

/**
 * update 를 해도 유효성 검사와 제약 조건이 적용되길 바란다면
 * `runValidators: true` 를 설정해줘야 한다.
 */
// Product.findOneAndUpdate({ name: 'Tire Pump' }, { price: -19.99 }, { new: true, runValidators: true })
// .then(data => {
//     console.log("IT WORKED!");
//     console.log(data);
// })
// .catch(err => {
//     console.log("OH NO ERROR!");
//     console.log(err);
// })