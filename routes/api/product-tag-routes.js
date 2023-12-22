const express = require(`express`);
const router = express.Router();
const { getProductTags } = require("../../helper");
const { ProductTag } = require("../../models");

// route for getting all of the proucts in a certain category
router.get(`/product-tags`, async (req, res) => getProductTags(req, res));

// Route for creating a new product-tag association
router.post("/product-tags", async (req, res) => {
  try {
    const newProductTag = await ProductTag.create(req.body);
    res.status(201).json(newProductTag);
  } catch (error) {
    console.error("Error creating product-tag association:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Route for updating an existing product-tag association by ID
router.put("/product-tags/:id", async (req, res) => {
  try {
    const productTagId = req.params.id;
    const updatedProductTag = await ProductTag.update(req.body, {
      where: { id: productTagId },
      returning: true,
    });
    res.status(200).json(updatedProductTag);
  } catch (error) {
    console.error("Error updating product-tag association:", error);
    res
      .status(400)
      .json({
        error: "Invalid data or product-tag association does not exist",
      });
  }
});

// Route for deleting a product-tag association by ID
router.delete("/product-tags/:id", async (req, res) => {
  try {
    const productTagId = req.params.id;
    const deletedProductTag = await ProductTag.destroy({
      where: { id: productTagId },
    });
    res.status(200).json(deletedProductTag);
  } catch (error) {
    console.error("Error deleting product-tag association:", error);
    res
      .status(400)
      .json({
        error: "Invalid data or product-tag association does not exist",
      });
  }
});

module.exports = router;
