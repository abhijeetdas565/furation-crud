const router = require("express").Router();
const itemController = require('../controllers/itemController');

router.post("/", itemController.item_create);
router.get("/", itemController.item_all);
router.get("/:itemId", itemController.item_details);
router.put("/:itemId", itemController.item_update);
router.delete("/:itemId", itemController.item_delete);

module.exports = router;
