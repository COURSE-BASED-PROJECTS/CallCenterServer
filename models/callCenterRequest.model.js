import mongoose from 'mongoose';

const callCenterRequestSchema = new mongoose.Schema({
    PhoneNumber: {
        type: String,
        unique: true,
        required: true,
    },
    CusName: {
        type: String,
        required: true,
    },
    CusAddress: {
        type: String
    },
    CarType: {
        type: Number,
        enum: [4, 7],
        required: true,
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
    RequestDate: {
        type: Date,
        required: true,
    }
});

const callCenterRequestModel = mongoose.model('CallCenterRequest', callCenterRequestSchema);

export default callCenterRequestModel;
