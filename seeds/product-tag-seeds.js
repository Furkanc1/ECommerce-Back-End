const { ProductTag, Product, Tag } = require(`../models`);

const productTagData = [
// Relating foreign keys to the Product Model + the Tag Model in order to create connections in the DataBase
    {product_id: 1, tag_id: 1, },
    {product_id: 2, tag_id: 2, },
    {product_id: 3, tag_id: 3, },
];

ProductTag.bulkCreate(productTagData, {
    include: [{ model: Product, as: 'Product' }],
    include: [{ model: Tag, as: 'Tag' }],
});

module.exports = productTagData;