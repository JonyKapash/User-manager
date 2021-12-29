const mongoose = require('mongoose');
const mongoPath = 'mongodb+srv://user1:1q2w3e4R@users-database.wjcmh.mongodb.net/users-data?retryWrites=true&w=majority' //todo: change to env file

module.exports = async () => {
    try {
        await mongoose.connect(mongoPath, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        return mongoose;
    } catch (error) {
        console.log("Error connecting to MongoDB");
        console.log(error);
    }
}
