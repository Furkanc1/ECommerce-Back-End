const express = require('express');
const router = express.Router();

// Importing category, product, and tag routes
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');
const { Tag, Product, ProductTag, Category } = require('../../models');

const getTags = async (req, res) => {
    try{
        const tags = await Tag.findAll({ 
            include: [{model: Product, through: ProductTag }] });
        res.json(tags);
    } catch (error) {
        console.log(`error getting tags`, error);
        res.status(500).json({ error: `server error` });
    }
}

// Using the category, product, and tag routes
router.use('/categories', categoryRoutes, async ( req, res ) => {
    try {
      const categories = await Category.findAll({ include: [Product] });
      res.json(categories);
    } catch ( error ) {
      console.log(`Error with Category Routes`, error);
      res.status(500).json({ error: `Error with server` });
    }
  });
router.use('/products', productRoutes);
router.use('/tags', tagRoutes, async ( req, res ) => getTags(req, res));

module.exports = router;