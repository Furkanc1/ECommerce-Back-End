const express = require('express');
const router = express.Router();

// Importing category, product, and tag routes
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');
const productTagRoutes = require('./product-tag-routes');
const { getTags, getCategories, getProductTags, getProducts } = require('../../helper');

// Using the category, product, and tag routes
router.use('/categories', categoryRoutes, async ( req, res ) => getCategories(req, res));
router.use('/products', productRoutes, async ( req, res) => getProducts(req, res));
router.use('/tags', tagRoutes, async ( req, res ) => getTags(req, res));
router.use('/product-tags', productTagRoutes, async ( req, res ) => getProductTags(req, res));

module.exports = router;