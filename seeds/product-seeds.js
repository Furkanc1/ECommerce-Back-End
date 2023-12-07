const { Product, Category } = require('../models');

const productData = [
    { product_name: 'He-Man Figurine', category_id: 1 },
    { product_name: 'The Giver', category_id: 2},
    { product_name: 'Sweater', category_id: 3},
];
//  We used the include property in order to give Category a place of reference so it does not say "Defined but is not referenced anywhere in the file" (so its not greyed out)
Product.bulkCreate(productData, {
    include: [{ model: Category, as: 'Category' }],
});

module.exports = productData;