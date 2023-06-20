const Item = require("../model/item");

// Get All items
const item_all = async (req, res) => {
    try {
        const items = await Item.find();
        res.json(items);
      } catch (error) {
        res.json({ message: error });
      }
};

// Single item
const item_details = async (req, res) => {
    try {
        const item = await Item.findById(req.params.itemId);
        res.json(item);
      } catch (error) {
        res.json({ message: error });
      }
};

// Add New item
const item_create = async (req, res) => {
    const item = new Item({
        title: req.body.title,
        price: req.body.price,
        image: req.body.image,
        details: req.body.details
      });
    
      try {
        const saveditem = await item.save();
        res.send(saveditem);
      } catch (error) {
        res.status(400).send(error);
      }
};

// Update item
const item_update = async (req, res) => {
    try {
        const item = {
          title: req.body.title,
          price: req.body.price,
          image: req.body.image,
          details: req.body.details
        };
    
        const updateditem = await Item.findByIdAndUpdate(
          { _id: req.params.itemId },
          item
        );
        res.json(updateditem);
      } catch (error) {
        res.json({ message: error });
      }
};

// Delete item
const item_delete = async (req, res) => {
    try {
        const removeitem = await item.findByIdAndDelete(req.params.itemId);
        res.json(removeitem);
      } catch (error) {
        res.json({ message: error });
      }
};

module.exports = {
    item_all, 
    item_details, 
    item_create, 
    item_update, 
    item_delete
  }