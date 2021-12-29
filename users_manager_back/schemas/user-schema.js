const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
	name: String,
	city: String,
	email: String,
	picture: String,
});

const User = mongoose.model("users", userSchema);

module.exports = User;