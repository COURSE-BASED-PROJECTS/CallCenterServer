import mongoose from 'mongoose';

const passengerRequestSchema = new mongoose.Schema({
    PassengerID: {
        type: String,
        unique: true,
        required: true,
    },
    PhoneNumber: {
        type: String,
        unique: true,
        required: true,
    },
    Avatar: {
        type: String
    },
    PickingAddress: {
        type: String,
        required: true,
    },
    LongPickingAddr: {
        type: Number,
        required: true,
    },
    LatPickingAddr: {
        type: Number,
        required: true,
    },
    ArrivingAddress: {
        type: String,
        required: true,
    },
    LongArrivingAddr: {
        type: Number,
        required: true,
    },
    LatArrivingAddr: {
        type: Number,
        required: true,
    },
    RequestDate: {
        type: Date,
        required: true,
    }
});

const passengerRequestModel = mongoose.model('PassengerRequest', passengerRequestSchema);

export default passengerRequestModel;
