const mongo = require("./mongo/mongo");
const express = require("express");
const app = express();

//this will allow us to receive information from the client
app.use(express.json());

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
		} finally {
            // finally is called after the try block is finished or an error is thrown
			mongoose.connection.close();
		}
	});
};
connectToMongoDB();  
