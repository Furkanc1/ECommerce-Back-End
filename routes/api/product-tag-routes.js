const express = require(`express`);
const router = express.Router();
const { getProductTags } = require("../../helper");

// route for getting all of the proucts in a certain category
router.get(`/product-tags`, async ( req, res ) => getProductTags(req, res));

module.exports = router;