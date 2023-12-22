const express = require('express');
const router = express.Router();
const { Tag, ProductTag, Product } = require(`../../models`);
const { getTags } = require('../../helper');

// will get all the tags with associated products
router.get(`/tags`, async ( req, res ) => getTags(req, res));

// gets a tag via its ID and associating products
router.get(`/tags/:id`, async ( req, res ) => {
    try{
        const tagID = req.params.id;
        const tag = await Tag.findOne({ 
            where: { id: tagID }, 
            include: [{model: Product, through: ProductTag }], 
        });

        if (tag) {
            res.json(tag);
        } else {
            res.status(404).json({ error: `tag not found` });
        }
    } catch (error) {
        console.log(`error getting tag by ID`. error);
        res.status(500).json({ error: `server error` });
    }
});

// will be used to create new tags
router.post(`/tags`, async ( req, res ) => {
    try{
        const newTag = await Tag.create(  req.body );
        res.status(201).json(newTag);
    } catch (error) {
        console.log(`error creating new tag`, error);
        res.status(400).json({ error: `invalid data input` });
    }
});

router.put(`/tags/:id`, async ( req, res ) => {
    try{
        const tagID = req.params.id;
        const updatedTag = await Tag.update( req.body, {
            where: { id: tagID },
        });
        res.status(200).json( updatedTag );
    } catch (error) {
        console.log('error updating tag by ID:', error);
    res.status(400).json({ error: 'Invalid data provided or tag does not exist:' });
    }
});

router.delete(`/tags/:id`, async (req, res) => {
    try {
      const tagID = req.params.id;
  
      const deletedRows = await Tag.destroy({
        where: { id: tagID },
      });
  
      if (deletedRows > 0) {
        res.status(200).json({ message: 'Tag deleted successfully' });
      } else {
        res.status(404).json({ error: 'Tag not found' });
      }
    } catch (error) {
      console.log('Error deleting tag by ID:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  

module.exports = router;
