import driverModel from '../models/driver.model.js';

export default {
    findAllDrivers: async (req, res, next) => {
        try {
            // use mongoose.find
            const list = await driverModel.find();

            //catch error
            let length = Object.keys(list).length;
            if (!length) {
                return res.status(404).json({ error: 'No driver found!' });
            }

            res.send(list);
        } catch (error) {
            res.status(400).json({ error: error.message });
            next();
        }
    },

    findByDriverID: async (req, res, next) => {
        try {
            const id = req.params.id;
            // use mongoose.find + parameter is object || other: findOne({})
            const item = await driverModel.find({ DriverID: id });

            //catch error
            let length = Object.keys(item).length;
            if (!length) {
                return res.status(404).json({ error: 'Driver does not found!' });
            }

            res.send(item);
        } catch (error) {
            res.status(400).json({ error: error.message });
            next();
        }
    },

    addDriver: async (req, res, next) => {
        try {
            const newDriver = new driverModel({
                DriverID: req.body.DriverID,
                DriverName: req.body.DriverName,
                Identification: req.body.Identification,
            });

            const result = await newDriver.save();
            res.send(result);
        } catch (error) {
            res.status(422).json({ error: error.message });
            next();
        }
    },

    updateDriver: async (req, res, next) => {
        try {
            const id = req.params.id;
            const updates = req.body;

            const result = await driverModel.findOneAndUpdate(
                { DriverID: id },
                updates
            );

            if (!result) {
                return res.status(404).json({ error: 'Driver does not exist!' });
            }

            res.send('Updated!');
        } catch (error) {
            res.status(400).json('Error: ' + error);
            next();
        }
    },

    deleteDriver: async (req, res, next) => {
        try {
            const id = req.params.id;
            const result = await driverModel.findOneAndDelete({
                DriverID: id,
            });

            if (!result) {
                return res.status(404).json({ error: 'Driver does not exist!' });
            }

            res.send(`Deleted the taxi: ${id} !!`);
        } catch (error) {
            res.status(400).json({ error: error.message });
            next();
        }
    },
};
