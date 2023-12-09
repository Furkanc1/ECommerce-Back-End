// Required all my seeds folder in order to run the seeds all in this file, and reference each folder in this order
const seedCategories = require(`./category-seeds`);
const seedProducts = require(`./product-seeds`);
const seedProductTags = require(`./product-tag-seeds`);
const seedTags = require(`./tag-seeds`);
// require the sequelize connection (connection to database (AKA SEEDING MY DATA INTO ecommerce_db))
const sequelize = require(`../config/connection`);

const seedDataBase = async () => {
    // Force:TRUE = everytime we seed our database this ensures that the previous table will be dropped and essentially remade with the original placeholder data (for the time being)

    // We are using the Async - Await is because each task in the seedDataBase function run asynchronously meaning that they will all being running at the same time, however this is not good for us because each model has to compile its data as well as realte to one another via foreign keys (therefore will cause an issue upon running)... async/await will allow each line of code to finish running before moving onto the next, in order to avoid breaking anything / loosing relationships between models (as i understand it to be)
    await sequelize.sync({ force: true });

    await seedCategories();
    await seedProducts();
    await seedProducts();
    await seedProductTags();
    await seedTags();
};

seedDataBase();