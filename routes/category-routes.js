const router = express.Router();
const express = require(`express`);
const { Category, Product } = require(`../models`);

router.get(`/categories`, async (req, res) => {
  try {
    const categories = await Category.findAll({ include: [Product] });
    res.json(categories);
  } catch (error) {
    console.log(`Error with Category Routes`, error);
    res.status(500).json({ error: `Error with server` });
  }
});

router.get(`/categories/:id`, async (req, res) => {
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
  } catch (error) {
        console.log('Error fetching category by ID:', error);
        res.status(500).json({ error: 'server error' });
    }
});

module.exports = router;
