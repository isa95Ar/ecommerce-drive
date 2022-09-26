import { connection, connect } from 'mongoose';

let isDbConnected = false;

const connectMongo = async () => {
	if (isDbConnected) return;
	const db = await connect('mongodb://localhost:27017/test');
	isDbConnected = db.connections[0].readyState;
};

connection
	.on('connected', () => {
		console.log('MongoDB is connected');
	})
	.on('error', err => {
		console.log(err);
	})
	.on('disconnected', () => {
		console.log('MongoDB is disconnected');
	});

export default connectMongo;
