import taxiRoute from '../routes/taxi.route.js';

export default function (app) {
    app.get('/', function (req, res) {
        res.send('Hello server-side');
    });

    app.get('/api/account', function (req, res) {
        res.json({ username: 'abc', password: 'anhtaixemayman' });
    });

    app.use('/api/taxis', taxiRoute);
}
