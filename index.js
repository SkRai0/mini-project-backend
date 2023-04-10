const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const app = express();
app.use(express.json());

dotenv.config({path: './config.env'})

const DB = process.env.MONGO_CONNECT.replace('<PASSWORD>', process.env.MONGODB_PASSWORD);

const userRoutes = require('./routes/userRoute.js')
app.use('/api/v1',userRoutes)

mongoose.connect(DB, {
	useNewUrlParser: true,
	useUnifiedTopology: true
}).then(() => {
	console.log("DB connection succesful 😁")
}).catch(err => {
	console.log(err)
})

app.listen(3000, () => {
    console.log("App running on port 3000");
})