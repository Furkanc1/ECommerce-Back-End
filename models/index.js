// models/index.js
const Category = require('./category');
const Product = require('./product');
const Tag = require('./tag');
const ProductTag = require('./productTag');

Product.belongsTo(Category, {
  foreignKey: 'category_id', // Foreign key linking Product to Category
});

Category.hasMany(Product, {
  foreignKey: 'category_id', // Foreign key linking Category to multiple Products
});

Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id',
});

Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id',
});

// association between producttag and product through its foreign key Product_ID
ProductTag.belongsTo(Product, {
  foreignKey: 'product_id',
});
// association between producttag and tag through its foreign key tag_ID

ProductTag.belongsTo(Tag, {
  foreignKey: 'tag_id',
});

// Export models
module.exports = { Category, Product, Tag, ProductTag };
