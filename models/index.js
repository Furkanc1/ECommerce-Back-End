// Defining what each of hte model are and what folder they each reach into (used to relate Primary keys (below))
const Category = require('./category');
const Product = require('./product');
const Tag = require('./tag');
const ProductTag = require('./productTag');

// Where we define the associations between the models Foreign Keys
// we add the associations here using belongsTo() in this case it is the foreign keys which relate to the models
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
  
  // Export models
  module.exports = { Category, Product, Tag, ProductTag, };