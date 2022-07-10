import passengerRequestModel from '../models/passengerRequest.model.js';

export default {
    findAllPassengerRequests: async (req, res, next) => {
        try {
            // use mongoose.find
            const list = await passengerRequestModel.find();

            //catch error
            let length = Object.keys(list).length;
            if (!length) {
                return res.status(404).json({ error: 'No passengerRequest found!' });
            }

            res.send(list);
        } catch (error) {
            res.status(400).json({ error: error.message });
            next();
        }
    },

    findByPassengerID: async (req, res, next) => {
        try {
            const id = req.params.id;
            // use mongoose.find + parameter is object || other: findOne({})
            const item = await passengerRequestModel.find({ PassengerID: id });

            //catch error
            let length = Object.keys(item).length;
            if (!length) {
                return res.status(404).json({ error: 'PassengerRequest does not found!' });
            }

            res.send(item);
        } catch (error) {
            res.status(400).json({ error: error.message });
            next();
        }
    },

    addPassengerRequest: async (req, res, next) => {
        try {
            const newPassengerRequest = new passengerRequestModel({
                PassengerID: req.body.PassengerID,
                PhoneNumber: req.body.PhoneNumber,
                Avatar: req.body.Avatar,
                PickingAddress: req.body.PickingAddress,
                LongPickingAddr: req.body.LongPickingAddr,
                LatPickingAddr: req.body.LatPickingAddr,
                ArrivingAddress: req.body.ArrivingAddress,
                LongArrivingAddr: req.body.LongArrivingAddr,
                LatArrivingAddr: req.body.LatArrivingAddr,
                RequestDate: req.body.RequestDate
            });

            const result = await newPassengerRequest.save();
            res.send(result);
        } catch (error) {
            res.status(422).json({ error: error.message });
            next();
        }
    },

    updatePassengerRequest: async (req, res, next) => {
        try {
            const id = req.params.id;
            const updates = req.body;

            const result = await passengerRequestModel.findOneAndUpdate(
                { PassengerID: id },
                updates
            );

            if (!result) {
                return res.status(404).json({ error: 'PassengerRequest does not exist!' });
            }

            res.send('Updated!');
        } catch (error) {
            res.status(400).json('Error: ' + error);
            next();
        }
    },

    deletePassengerRequest: async (req, res, next) => {
        try {
            const id = req.params.id;
            const result = await passengerRequestModel.findOneAndDelete({
                PassengerID: id,
            });

            if (!result) {
                return res.status(404).json({ error: 'PassengerRequest does not exist!' });
            }

            res.send(`Deleted the passengerRequest: ${id} !!`);
        } catch (error) {
            res.status(400).json({ error: error.message });
            next();
        }
    },
};
