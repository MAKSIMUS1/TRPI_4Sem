class Shoes {
    type;
    id;
    size;
    color;
    price;
    discount;
    _discountPrice;
    get discountPrice() {
        return this.price - this.price * (this.discount / 100);
    }
    set discountPrice(discount) {
        this.discount = discount;
        this.discountPrice = this.price - (this.price * (this.discount / 100));
    }
    constructor(type, id, size, color, price, discount) {
        this.type = type;
        this.id = id;
        this.size = size;
        this.color = color;
        this.price = price;
        this.discount = discount;
    }
}
class Products {
    products;
    pointer = 0;
    constructor(products) {
        this.products = products;
    }
    next() {
        if (this.pointer < this.products.length) {
            return {
                done: false,
                value: this.products[this.pointer++],
            };
        }
        else {
            return {
                done: true,
                value: null,
            };
        }
    }
    [Symbol.iterator]() {
        return this;
    }
}
let hitProducts = new Products([
    new Shoes("Ботинки", 10001, 42, "Синий", 25, 10),
    new Shoes("Ботинки", 10002, 39, "Черный", 40, 0),
    new Shoes("Ботинки", 10003, 41, "Белый", 65, 0),
    new Shoes("Кроссовки", 10101, 41, "Черный", 30, 0),
    new Shoes("Кроссовки", 10102, 40, "Желтый", 25, 50),
    new Shoes("Кроссовки", 10103, 42, "Фиолетовый", 70, 0),
    new Shoes("Сандалии", 10201, 40, "Красный", 10, 20),
    new Shoes("Сандалии", 10202, 37, "Белый", 20, 30),
    new Shoes("Сандалии", 10203, 39, "Зеленый", 13, 0),
]);
Object.defineProperty(hitProducts.products, "id", {
    writable: false,
    configurable: false
});
Object.defineProperty(hitProducts.products, "color", {
    writable: false
});
Object.defineProperty(hitProducts.products, "size", {
    writable: false
});
let sortPrice = parseInt(prompt("Введите максимальную цену.", '45'));
for (let prod of hitProducts)
    if (prod.price < sortPrice)
        console.log(`Вид: ${prod.type}\t| ID: ${prod.id}\t| Размер: ${prod.size}\t| Цвет: ${prod.color}\t\t| Цена: ${prod.price}\t| Скидка: ${prod.discount}%\t| Конечная стоимость: ${prod.discountPrice}`);
console.log(`_________________________________________________________________________________`);
let sortColor = prompt("Введите нужный цвет.", 'Черный');
for (let prod of hitProducts)
    if (prod.color == sortColor)
        console.log(`Вид: ${prod.type}\t| ID: ${prod.id}\t| Размер: ${prod.size}\t| Цвет: ${prod.color}\t\t| Цена: ${prod.price}\t| Скидка: ${prod.discount}%\t| Конечная стоимость: ${prod.discountPrice}`);
console.log(`_________________________________________________________________________________`);
let sortSize = parseInt(prompt("Введите нужный размер.", '39'));
for (let prod of hitProducts)
    if (prod.size == sortSize)
        console.log(`Вид: ${prod.type}\t| ID: ${prod.id}\t| Размер: ${prod.size}\t| Цвет: ${prod.color}\t\t| Цена: ${prod.price}\t| Скидка: ${prod.discount}%\t| Конечная стоимость: ${prod.discountPrice}`);
console.log(`_________________________________________________________________________________`);
