import mongoose from 'mongoose';

const driverSchema = new mongoose.Schema({
    DriverID: {
        type: String,
        unique: true,
        required: true,
    },
    DriverName: {
        type: String,
        required: true,
    },
    Identification: {
        type: String,
        unique: true,
        required: true,
    },
});

const driverModel = mongoose.model('Driver', driverSchema);

export default driverModel;
