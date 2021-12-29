const mongoose = require("mongoose");

// creates a new schema for our user model this is the format of the data that we will be storing in the database
const UserSchema = mongoose.Schema({
	name: {
		title: String,
		first: String,
		last: String,
	},
	location: {
		street: {
			number: Number,
			name: String,
		},
		city: String,
		state: String,
		country: String,
		postcode: Number,
		coordinates: {
			latitude: String,
			longitude: String,
		},
		timezone: {
			offset: String,
			description: String,
		},
	},
	email: String,
	registered: {
		date: String,
		age: Number,
	},
	picture: {
		large: String,
		medium: String,
		thumbnail: String,
	},
});

const User = mongoose.model("users", UserSchema);

module.exports = User;
