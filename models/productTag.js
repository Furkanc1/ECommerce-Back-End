// BoilerPlate Code: basically same for each models file. (CREATES SEQUELIZE MODELS FOR CATEGORY INDEX PRODUCT PRODUCT TAG + TAG...JS)

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Create ProductTag model by extending Sequelize's Model class
class ProductTag extends Model {}

// Define the ProductTag model's attributes and data types
ProductTag.init(
  {
    // 'id' column: Integer, auto-incremented, not null, and set as primary key
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // 'product_id' column: Integer, references the 'id' column in the 'product' model
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'product',
        key: 'id',
      },
    },
    // 'tag_id' column: Integer, references the 'id' column in the 'tag' model
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'tag',
        key: 'id',
      },
    },
  },
  {
    // Sequelize instance and connection to the database
    sequelize,
    // Do not add 'created_at' and 'updated_at' timestamps to the table
    timestamps: false,
    // Prevent Sequelize from pluralizing the table name
    freezeTableName: true,
    // Use underscores instead of camel-casing (e.g., product_tag)
    underscored: true,
    // Model name stays singular in the database
    modelName: 'product_tag',
  }
);

// Export the ProductTag model
module.exports = ProductTag
