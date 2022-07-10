import express from 'express';

const router = express.Router();

import passengerRequestController from '../controllers/passengerRequest.controller.js';

//Get a list of all drivers
router.get('/', passengerRequestController.findAllPassengerRequests);

//Get driver by DriverID
router.get('/:id', passengerRequestController.findByPassengerID);

// Create a new driver
router.post('/', passengerRequestController.addPassengerRequest);

// Update a driver
// Chọn PUT hoặc PATCH thì thay đổi
router.patch('/:id', passengerRequestController.updatePassengerRequest);

// Delete a driver
router.delete('/:id', passengerRequestController.deletePassengerRequest);

export default router;
