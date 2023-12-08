const { Category } = require('../models');
// Do not require category_id here as the primary key will automatically set the them each to their own unique ID's
const categoryData = [
    { category_name: 'Toys' },
    { category_name: 'Books' },
    { category_name: 'Clothes' },
];

Category.bulkCreate(categoryData);

module.exports = categoryData;