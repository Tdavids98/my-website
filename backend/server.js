const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');
const routes = require('./routes/api');

const app = express();
const PORT = process.env.PORT || 8080;

const MONGODB_URI = 'mongodb+srv://tdavids98:T2VMqyqsaM4rmFG@cluster0.kt1o7sa.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(process.env.MONGODB_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
	console.log('Mongoose has been connected');
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// HTTP request logger
app.use(morgan('tiny'));
app.use('/api', routes);

if(process.env.NODE_ENV === 'production'){
	app.use(express.static('../build'));
}

app.listen(PORT, console.log(`Server is starting at ${PORT}`));