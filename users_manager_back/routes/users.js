const express = require("express");
const router = express.Router();

const UserModel = require("../models/User");

router.get("/", async (req, res) => {
	try {
		const allUsers = await UserModel.find({}).limit(100);
		res.send(allUsers);
	} catch (error) {
		console.log(error);
	}
});

router.post("/addNewUser", async (req, res) => {
	try {
		const user = req.body;
		const { firstName, lastName, email, country} = user;
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











//here we have one route that mach /:id and we are chaining 3 different requests to make the code cleaner
// router
// 	.route("/:id")
// 	.get((req, res) => {
// 		//we are pulling the id from the url params
// 		console.log(req.user);
// 		res.send(`Get user with ID ${req.params.id}`);
// 	})
// 	.put((req, res) => {
// 		res.send(`Update user with ID ${req.params.id}`);
// 	})
// 	.delete((req, res) => {
// 		res.send(`Delete user with ID ${req.params.id}`);
// 	});



// //whenever we go to a route that has an "id" param run this code
// router.param("id", (req, res, next, id) => {
// 	req.user = users[id];
// 	next();
// });

module.exports = router;
