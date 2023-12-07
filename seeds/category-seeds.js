const { Category } = require('../models');

const categoryData = [
    { category_name: 'Toys', category_id: 1 },
    { category_name: 'Books', category_id: 2 },
    { category_name: 'Clothes', category_id: 3 },
];

Category.bulkCreate(categoryData);

module.exports = categoryData;