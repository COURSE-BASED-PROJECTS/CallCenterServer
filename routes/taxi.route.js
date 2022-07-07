import express from 'express';

const router = express.Router();

import taxiController from '../controllers/taxi.controller.js';

//Get a list of all taxis
router.get('/', taxiController.findAllTaxis);

//Get taxi by TaxiID
router.get('/:id', taxiController.findByTaxiID);

// Create a new taxi
router.post('/', taxiController.addTaxi);

// Update a taxi
// Chọn PUT hoặc PATCH thì thay đổi
router.patch('/:id', taxiController.updateTaxi);

// Delete a taxi
router.delete('/:id', taxiController.deleteTaxi);

export default router;
