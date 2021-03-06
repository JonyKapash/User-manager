const express = require("express");
const router = express.Router();

const UserModel = require("../models/User");

router.get("/", async (req, res) => {
	try {
		const allUsers = await UserModel.find({}).limit(100);
		res.send(allUsers);
	} catch (error) {
		res.send(error);
		console.log(error);
	}
});

router.post("/addNewUser", async (req, res) => {
	try {
		const user = req.body;
		const { firstName, lastName, email, country } = user;
		const newUser = new UserModel({
			name: {
				title: null,
				first: firstName,
				last: lastName,
			},
			location: {
				street: {
					number: null,
					name: null,
				},
				city: null,
				state: null,
				country: country,
				postcode: null,
				coordinates: {
					latitude: null,
					longitude: null,
				},
				timezone: {
					offset: null,
					description: null,
				},
			},
			email: email,
			registered: {
				date: null,
				age: null,
			},
			picture: {
				large: null,
				medium: null,
				thumbnail: null,
			},
		});
		await newUser.save();
		return res.send("User saved successfully");
	} catch (error) {
		console.log(error);
	}
});

//todo: check for the server error after updating the user
router.put("/updateUser", async (req, res) => {
	try {
		const user = req.body;
		const { id, firstName, lastName, email, country } = user;

		await UserModel.findById(id, (error, updatedUser) => {
			updatedUser.name.first = firstName;
			updatedUser.name.last = lastName;
			updatedUser.location.country = country;
			updatedUser.email = email;
			updatedUser.save();
		});
		return res.send("User updated successfully");
	} catch (error) {
		console.log(error);
	}
});

router.delete("/deleteUser/:id", async (req, res) => {
	try {
		const userId = req.params.id;
		await UserModel.findByIdAndDelete(userId).exec();
		return res.send("User deleted successfully");
	} catch (error) {
		console.log(error);
	}
});

router.get("/searchUser/:data", async (req, res) => {
	try {
		const userData = req.params.data;
		const results = await UserModel.find({
			$or: [
				{ "name.first": `${userData}` },
				{ "name.last": `${userData}` },
				{ email: userData },
				{ "location.country": `${userData}` },
			],
		});
		return res.send(results);
	} catch (error) {
		console.log(error);
	}
});

module.exports = router;