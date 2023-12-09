// here we import the Tag Model from the MODELS folder
const { Tag, ProductTag, Product } = require(`../models`);

// we define tagData as an array of data to be used by the database as placeholder information
const tagData = [
    { tag_name: 'ComicBook-Character'},
    { tag_name: 'Fictional'},
    { tag_name: 'Comfy'},
];
// include product tag data as an array of data which will be used to associate Tag with Product_tag (as per error in my console, " [SequelizeEagerLoadingError]: tag is not associated to product_tag! "
const productTagData = [
    // Associate TAG model with PRODUCT model using "product_id" and "tag_id" below
    { product_id: 1, tag_id: 1 },
    { product_id: 2, tag_id: 2 },
  ];
// bulk create method used to inser the tagData into the TAG Model
Tag.bulkCreate(tagData);
ProductTag.bulkCreate(productTagData, {
    include: [{ model: Product }]
});

module.exports = tagData;