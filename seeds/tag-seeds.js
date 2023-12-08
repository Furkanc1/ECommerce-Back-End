// here we import the Tag Model from the MODELS folder
const { Tag } = require(`../models`);

// we define tagData as an array of data to be used by the database as placeholder information
const tagData = [
    { tag_name: 'ComicBook-Character'},
    { tag_name: 'Fictional'},
    { tag_name: 'Comfy'},
];
// bulk create method used to inser the tagData into the TAG Model
Tag.bulkCreate(tagData);

module.exports = tagData;