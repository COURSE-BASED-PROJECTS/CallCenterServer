import mongoose from 'mongoose';

const taxiSchema = new mongoose.Schema({
    TaxiID: {
        type: String,
        unique: true,
        required: true,
    },
    Plate: {
        type: String,
        required: true,
    },
    CarType: {
        type: String,
        enum: ['4', '7'],
        required: true,
    },
});
//Phải để tên số ít, vì mongoose sẽ tự chuyển đổi thành viết thường + số nhiều
// Taxi --> taxis (đây là tên của collection trong mongoDB)
// CallCenterRequest --> callcenterrequests
// PassengerRequest --> passengerrequests
// Driver --> drivers
const taxiModel = mongoose.model('Taxi', taxiSchema);

export default taxiModel;
