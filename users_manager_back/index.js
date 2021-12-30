const mongo = require("./mongo/mongo");
const express = require("express");
const cors = require("cors");
const app = express();

//this will allow us to receive information from the client
app.use(express.json());
app.use(cors());
//route for users, used to get/show all users and currently the home page
app.use('/', require("./routes/users"))


const port = 4000; //todo: change to env file
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


const connectToMongoDB = async () => {
	await mongo().then(mongoose => {
		try {
			console.log("Connected to MongoDB");
		} catch (error) {
			console.log(`Error connecting to MongoDB, Error: ${error}`);
		}
	});
};
connectToMongoDB();  
