const express = require(`express`);
const router = express.Router();
const { Category, Product } = require(`../../models`);
const { getCategories, getCategoriesById } = require("../../helper");

// gets  all the categories that have associating products
router.get(`/categories`, async ( req, res ) => getCategories(req, res));

// get a specific category strictly by id of associating products
router.get(`/categories/:id`, async ( req, res ) => getCategoriesById(req, res));

// creates a new category
router.post(`/categories`, async ( req, res ) => {
    try {
        const newCategory = await Category.create(req.body);
        res.status(201).json(newCategory);
    } catch ( error ) {
        console.log(`Error creating new Category:`, error);
        res.status(400).json({ error: `data is not valid` });
    }
});

// will update an existing category by its ID
router.put(`/categories/:id`, async (req, res) => {
  try {
    const categoryID = req.params.id;
    
    // Destructure the req.body to get only the category_name
    const { category_name } = req.body;

    // Check if category_name is provided in the request body
    if (!category_name) {
      return res.status(400).json({ error: 'Category name is required for update' });
    }

    const [updatedRows] = await Category.update(
      { category_name },
      {
        where: { category_id: categoryID }, // Use the correct column name
        returning: true, // makes sure that the route returns the updated row
      }
    );

    if (updatedRows > 0) {
      const updatedCategory = await Category.findByPk(categoryID);
      res.status(200).json(updatedCategory);
    } else {
      res.status(201).json({ message:  `category updated!` });
    }
  } catch (error) {
    console.log(`Error updating category through id:`, error);
    res.status(500).json({ error: `Internal server error` });
  }
});


// deletes a category (by id)
router.delete(`/categories/:id`, async (req, res) => {
  try {
    const categoryID = req.params.id;

    const deletedRows = await Category.destroy({
      where: { category_id: categoryID },
    });

    if (deletedRows > 0) {
      res.status(200).json({ message: 'Category deleted successfully' });
    } else {
      res.status(404).json({ error: 'Category not found' });
    }
  } catch (error) {
    console.log(`Error deleting category:`, error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


module.exports = router;
