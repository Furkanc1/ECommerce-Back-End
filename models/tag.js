// BoilerPlate Code: basically same for each models file. (CREATES SEQUELIZE MODELS FOR CATEGORY INDEX PRODUCT PRODUCT TAG + TAG...JS)
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Will create TAG model by extending sequelizes MODEL class
class Tag extends Model {}

// Define the Tag model's attributes and data types
Tag.init(
  {
// Will create a column named ID + defines requirements for column: Id must be an integer + cant be null + is a PK (used for referencing other models) + will autoincrement (keep adding onto id #'s in order to ensure no id is the same)
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
// tag_name column will be created + ensures that the tag name is inputted as a STRING
    tag_name: {
      type: DataTypes.STRING,
    },
  },
  {
// Sequelize instance and connection to the database
    sequelize,
    timestamps: false,
// Prevent Sequelize from pluralizing the table name
    freezeTableName: true,
// Use underscores instead of camel-casing (e.g., tag_name)
    underscored: true,
// Model name stays singular in the database
    modelName: 'tag',
  }
);

// exports the Tag model
module.exports = Tag;
