const express = require(`express`);
const router = express.Router();
const { Category, Product } = require(`../../models`);

// gets  all the categories that have associating products
router.get(`/categories`, async ( req, res ) => {
  try {
    const categories = await Category.findAll({ include: [Product] });
    res.json(categories);
  } catch ( error ) {
    console.log(`Error with Category Routes`, error);
    res.status(500).json({ error: `Error with server` });
  }
});

// get a specific category strictly by id of associating products
router.get(`/categories/:id`, async ( req, res ) => {
  try {
    const categoryID = req.params.id;
    const category = await Category.findOne({
      where: { id: categoryID },
      include: [Product],
    });
    if (category) {
      res.json(category);
    } else {
      res.status(404).json({ error: `Category does not exist` });
    }
  } catch ( error ) {
        console.log('Error fetching category by ID:', error);
        res.status(500).json({ error: 'server error' });
    }
});

// creates a new category
router.post(`/categories/:id`, async ( req, res ) => {
    try {
        const newCategory = await Category.create(req.body);
        res.status(201).json(newCategory);
    } catch ( error ) {
        console.log(`Error creating new Category:`, error);
        res.status(400).json({ error: `data is not valid` });
    }
});

// will update an existing category by its ID
router.put(`/categories/:id`, async ( req, res ) => {
    try {
        const categoryID = req.params.id;
        const updatedCategory = await Category.update(req.body, {
            where: {id: categoryID},
        });
        res.status(200).json(updatedCategory);
    } catch ( error ) {
        console.log(`error updating category through id:`, error);
        res.status(400).json({ error: `invalid data or category does not exist` });
    }
});

// deletes a category (by id)
router.delete(`/categories/:id`, async ( req, res ) => {
    try {
        const categoryID = req.params.id;
        const deletedCategory = await Category.destroy({
            where: {id: categoryID },
        });
        res.status(200).json(deletedCategory);
    } catch ( error ) {
        console.log(`error deleting category`, error);
        res.status(400).json({ error: `invalid request or category does not exist` });
    }
});

module.exports = router;
