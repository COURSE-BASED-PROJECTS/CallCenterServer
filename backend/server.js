import express from 'express';
import cors from 'cors';
import morgan from 'morgan'
import mongoose from 'mongoose';
import {} from 'dotenv/config';

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(morgan('dev'))
app.use(express.json());

// connect the database
const uri = process.env.DATABASE_URI;
mongoose.connect(uri, { useNewUrlParser: true });

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('CallCenter Database connection established successfully!');
});

app.get('/',function (req, res){
    res.send("Hello server-side")
});

app.get('/api/account',function (req, res){
    res.json({username:'abc',
                password:'anhtaixemayman'});
})

app.listen(port, function () {
    console.log(`Server listening at http://localhost:${port}`);
});
