import taxiRoute from '../routes/taxi.route.js';
import driverRoute from "../routes/driver.route.js";
import callCenterRequestRoute from "../routes/callCenterRequest.route.js";
import passengerRequestRoute from "../routes/passengerRequest.route.js";

export default function (app) {
    app.get('/', function (req, res) {
        res.send('Hello server-side');
    });

    app.get('/api/account', function (req, res) {
        res.json({ username: 'abc', password: 'anhtaixemayman' });
    });

    app.use('/api/taxis', taxiRoute);
    app.use('/api/drivers', driverRoute);
    app.use('/api/callCenter', callCenterRequestRoute);
    app.use('/api/passengers', passengerRequestRoute);
}
