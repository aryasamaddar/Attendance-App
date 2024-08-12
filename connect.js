import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();
const connect = mongoose.connect(process.env.MONGO_URL);
connect.then(() => {
    console.log("Database connected successfully");
})
.catch(() => {
    console.log("Cannot connect to databse");
});

const SigninSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    accType: {
        type: String,
        required: true
    }
});

const collection = new mongoose.model("users", SigninSchema);

export default collection;