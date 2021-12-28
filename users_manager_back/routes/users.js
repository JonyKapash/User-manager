const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
	res.send("User list");
});

router.get("/new", (req, res) => {
	res.send("New user");
});

router.post("/", (req, res) => {
	res.send("Create new user");
});

//here we have one route that mach /:id and we are chaining 3 different requests to make the code cleaner
router
	.route("/:id")
	.get((req, res) => {
		//we are pulling the id from the url params
		console.log(req.user);
		res.send(`Get user with ID ${req.params.id}`);
	})
	.put((req, res) => {
		res.send(`Update user with ID ${req.params.id}`);
	})
	.delete((req, res) => {
		res.send(`Delete user with ID ${req.params.id}`);
	});

const users = [{ name: "John" }, { name: "Bob" }];

//whenever we go to a route that has an "id" param run this code
router.param("id", (req, res, next, id) => {
	req.user = users[id];
	next();
});

module.exports = router;
