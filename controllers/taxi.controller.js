import taxiModel from '../models/taxi.model.js';

export default {
    findAllTaxis: async (req, res, next) => {
        try {
            // use mongoose.find
            const list = await taxiModel.find();

            //catch error
            let length = Object.keys(list).length;
            if (!length) {
                return res.status(404).json({ error: 'No taxis found!' });
            }

            res.send(list);
        } catch (error) {
            res.status(400).json({ error: error.message });
            next();
        }
    },

    findByTaxiID: async (req, res, next) => {
        try {
            const id = req.params.id;
            // use mongoose.find + parameter is object || other: findOne({})
            const item = await taxiModel.find({ TaxiID: id });

            //catch error
            let length = Object.keys(item).length;
            if (!length) {
                return res.status(404).json({ error: 'Taxi does not found!' });
            }

            res.send(item);
        } catch (error) {
            res.status(400).json({ error: error.message });
            next();
        }
    },

    addTaxi: async (req, res, next) => {
        try {
            const newTaxi = new taxiModel({
                TaxiID: req.body.TaxiID,
                Plate: req.body.Plate,
                CarType: req.body.CarType,
            });

            const result = await newTaxi.save();
            res.send(result);
        } catch (error) {
            res.status(422).json({ error: error.message });
            next();
        }
    },

    updateTaxi: async (req, res, next) => {
        try {
            const id = req.params.id;
            const updates = req.body;

            const result = await taxiModel.findOneAndUpdate(
                { TaxiID: id },
                updates
            );

            if (!result) {
                return res.status(404).json({ error: 'Taxi does not exist!' });
            }

            res.send('Updated!');
        } catch (error) {
            res.status(400).json('Error: ' + error);
            next();
        }
    },

    deleteTaxi: async (req, res, next) => {
        try {
            const id = req.params.id;
            const result = await taxiModel.findOneAndDelete({
                TaxiID: id,
            });

            if (!result) {
                return res.status(404).json({ error: 'Taxi does not exist!' });
            }

            res.send(`Deleted the taxi: ${id} !!`);
        } catch (error) {
            res.status(400).json({ error: error.message });
            next();
        }
    },
};
