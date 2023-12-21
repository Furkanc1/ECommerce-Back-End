const { Product, ProductTag, Tag, Category } = require("./models");

const getTags = async (req, res) => {
    try {
        const tags = await Tag.findAll({ include: [{model: Product, through: ProductTag }] });
        res.json(tags);
    } catch (error) {
        console.log(`error getting tags`, error);
        res.status(500).json({ error: `server error` });
    }
}

const getCategories = async (req, res) => {
    try {
      const categories = await Category.findAll({ include: [Product] });
      res.json(categories);
    } catch ( error ) {
      console.log(`Error with Category Routes`, error);
      res.status(500).json({ error: `Error with server` });
    }
}

const getProducts = async (req, res) => {
    try {
        const products = await Product.findAll({ include: [Category] });
        res.json(products);
    } catch ( error ) {
        console.log(`error fetching products`, error );
        res.status(500).json({ error: `server error` });
    }
}

const getProductTags = async (req, res) => {
    try {
        const productTags = await ProductTag.findAll();
        res.json(productTags);
    } catch ( error ) {
        console.log(`error fetching products`, error );
        res.status(500).json({ error: `server error` });
    }
}

module.exports = {
    getTags,
    getProducts,
    getCategories,
    getProductTags,
    // Add more helper functions
}