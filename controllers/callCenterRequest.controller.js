import callCenterRequestModel from '../models/callCenterRequest.model.js';

export default {
    findAllCallCenterRequests: async (req, res, next) => {
        try {
            // use mongoose.find
            const list = await callCenterRequestModel.find();

            //catch error
            let length = Object.keys(list).length;
            if (!length) {
                return res.status(404).json({error: 'No callCenterRequest found!'});
            }

            res.send(list);
        } catch (error) {
            res.status(400).json({error: error.message});
            next();
        }
    },

    findByPhoneNumber: async (req, res, next) => {
        try {
            const phoneNumber = req.params.phoneNumber;
            // use mongoose.find + parameter is object || other: findOne({})
            const item = await callCenterRequestModel.find({PhoneNumber: phoneNumber});

            //catch error
            let length = Object.keys(item).length;
            if (!length) {
                return res.status(404).json({error: 'CallCenterRequest does not found!'});
            }

            res.send(item);
        } catch (error) {
            res.status(400).json({error: error.message});
            next();
        }
    },

    addCallCenterRequest: async (req, res, next) => {
        try {
            const newCallCenterRequest = new callCenterRequestModel({
                PhoneNumber: req.body.PhoneNumber,
                CusName: req.body.CusName,
                CusAddress: req.body.CusAddress,
                CarType: req.body.CarType,
                PickingAddress: req.body.PickingAddress,
                LongPickingAddr: req.body.LongPickingAddr,
                LatPickingAddr: req.body.LatPickingAddr,
                RequestDate: req.body.RequestDate
            });

            const result = await newCallCenterRequest.save();
            res.send(result);
        } catch (error) {
            res.status(422).json({error: error.message});
            next();
        }
    },

    updateCallCenterRequest: async (req, res, next) => {
        try {
            const phoneNumber = req.params.phoneNumber;
            const updates = req.body;

            const result = await callCenterRequestModel.findOneAndUpdate(
                {PhoneNumber: phoneNumber},
                updates
            );

            if (!result) {
                return res.status(404).json({error: 'CallCenterRequest does not exist!'});
            }

            res.send('Updated!');
        } catch (error) {
            res.status(400).json('Error: ' + error);
            next();
        }
    },

    deleteCallCenterRequest: async (req, res, next) => {
        try {
            const phoneNumber = req.params.phoneNumber;
            const result = await callCenterRequestModel.findOneAndDelete({
                PhoneNumber: phoneNumber,
            });

            if (!result) {
                return res.status(404).json({error: 'CallCenterRequest does not exist!'});
            }

            res.send(`Deleted the CallCenterRequest: ${phoneNumber} !!`);
        } catch (error) {
            res.status(400).json({error: error.message});
            next();
        }
    },
};
