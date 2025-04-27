"use strict";
function printProduct(product) {
    console.log(`Product: ${product.name} costs $${product.price} and is ${product.inStock ? "available" : "out of stock"}.`);
}
const product = { id: 342, name: "nerya", price: 399, inStock: true };
printProduct(product);
