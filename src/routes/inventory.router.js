const express = require('express');
const router = express.Router();
const inventoriesCtrl = require('../controllers/inventory.controller')
router.put('/inventory',inventoriesCtrl.addInventory)
module.exports = router