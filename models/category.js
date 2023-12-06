// BoilerPlate Code: basically same for each models file. (CREATES SEQUELIZE MODELS FOR CATEGORY INDEX PRODUCT PRODUCT TAG + TAG...JS)
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// creates CATEGORY model by EXTENDING sequelizes MODEL class:
class Category extends Model {}

// Defining the models characteristics or rather specifically the what *attributes + datatypes* are within the category Model
Category.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
// defines the prerequisites of the category Models name: (Must be string and must not be null)
      category_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
// defines Sequelize instance + is the Model:Category's connection to the database
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'category',
    }
  );
// Exports: CategoryModule
  module.exports = Category;
