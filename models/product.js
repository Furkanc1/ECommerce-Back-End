// BoilerPlate Code: basically same for each models file. (CREATES SEQUELIZE MODELS FOR CATEGORY INDEX PRODUCT PRODUCT TAG + TAG...JS)
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Creates product MODEL by EXTENDING sequelize's MODEL class:
class Product extends Model {}


// determines whats inside the Product Model: Attributes + Datatypes
Product.init(
  {
// Imagining a table being created, this would define the ID "Column", which is meant to be 1) an integer 2) cant be null 3) is a PRIMARYKEY meaning can be used by other Models 4) must autoincrement so there are consistant ID's and no repetition
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
// defines name/s of products inside the product model (just anther column) where the names must be strings + cant be null (cant have a product without a name obviously)
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
// defines the pricing of the Product (another column named price) which states that: 1) must be a decimal (prices usually have tax + cents so it cant be a whole integer every single time, therefore we have datatype.DECIMAL) + cant be null + a validate function(not sure if this is actually a function) which ensures that the number placed is a decimal)
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        isDecimal: true,
      },
    },
// Stock will be its own column which must be an integer + must not be null + (default set to 10) + validated to be a whole number
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate: {
        isNumeric: true,
      },
    },
// Similar to the product ID above, the product must also have a Category which it falls in which will be determined by a Category ID (this is where the primary keys come into play)
// Will Reference the `ID` COLUMN in the **Category Model** as shown below
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'category',
        key: 'id',
      },
    },
  },
// Sequelize connection (boilerplate) + modelName:
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
