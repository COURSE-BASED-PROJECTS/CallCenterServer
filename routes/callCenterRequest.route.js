import express from 'express';

const router = express.Router();

import callCenterRequest from '../controllers/callCenterRequest.controller.js';

//Get a list of all drivers
router.get('/', callCenterRequest.findAllCallCenterRequests);

//Get driver by DriverID
router.get('/:phoneNumber', callCenterRequest.findByPhoneNumber);

// Create a new driver
router.post('/', callCenterRequest.addCallCenterRequest);

// Update a driver
// Chọn PUT hoặc PATCH thì thay đổi
router.patch('/:phoneNumber', callCenterRequest.updateCallCenterRequest);

// Delete a driver
router.delete('/:phoneNumber', callCenterRequest.deleteCallCenterRequest);

export default router;
