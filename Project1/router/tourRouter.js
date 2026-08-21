const express = require('express');
const router = express.Router();
const tourController = require('../controller/tourController');

router.get('/', tourController.getAllTours);
router.get('/:id',tourController.getTourById);
router.post('/',tourController.createTour);
router.put('/:id',tourController.updateTour);
router.delete('/:id',tourController.deletetour);
module.exports = router;