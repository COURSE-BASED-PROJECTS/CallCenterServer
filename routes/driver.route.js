import express from 'express';

const router = express.Router();

import driverController from '../controllers/driver.controller.js';

//Get a list of all drivers
router.get('/', driverController.findAllDrivers);

//Get driver by DriverID
router.get('/:id', driverController.findByDriverID);

// Create a new driver
router.post('/', driverController.addDriver);

// Update a driver
// Chọn PUT hoặc PATCH thì thay đổi
router.patch('/:id', driverController.updateDriver);

// Delete a driver
router.delete('/:id', driverController.deleteDriver);

export default router;
