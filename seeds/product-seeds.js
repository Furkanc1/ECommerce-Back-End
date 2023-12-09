const { Product, Category } = require('../models');

const productData = [
    { product_name: 'He-Man Figurine', product_price: 12.99, stock: 11, category_id: 1 },
    { product_name: 'The Giver', product_price: 8.97,stock: 16, category_id: 2},
    { product_name: 'Sweater', product_price: 16.99,stock: 19 , category_id: 3},
];
//  We used the include property in order to give Category a place of reference so it does not say "Defined but is not referenced anywhere in the file" (so its not greyed out)
//  update removed the as: `category`, because it was creating errors when i tried to seed database
Product.bulkCreate(productData, {
    include: [{ model: Category }],
});

module.exports = productData;