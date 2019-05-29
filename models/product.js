// Javascriptte class'ın field'ları constructor sayesinde belirlenir
module.exports = class Product {
    constructor(_name, _price, _imageUrl, _description) {
        this.name = _name,
            this.price = _price,
            this.imageUrl = _imageUrl,
            this.description = _description
    }
    saveProduct() {
        products.push(this); // buradaki this -> x isimli ,Product class'tan bir nesne ürettik. x.saveProduct() deyince buradaki this'e x ürünü gelir.
    }

    static getAll() {
        return products;
    }
}
/*
static olan method model'in kendisi üzerinden kullanılır.
Product.getAll()
const ürün = new Product('samsung',1000,'1.jpg','iyi telefon')
ürün.saveProduct()
*/

const products = [ // ilk başta belirli productlar belirledik
    { name: 'Samsung S8', price: 3000, imageUrl: '1.jpg', description: 'iyi telefon' },
    { name: 'Samsung S7', price: 2000, imageUrl: '2.jpg', description: 'idare eder' },
    { name: 'Samsung S9', price: 4000, imageUrl: '3.jpg', description: 'çok iyi' },
    { name: 'IPhone 7S', price: 4500, imageUrl: '4.jpg', description: 'güzel telefon' }
]


