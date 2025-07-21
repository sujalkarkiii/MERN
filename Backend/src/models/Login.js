import mongoose from "mongoose";
const loginSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    // Will Use Validation later on...
    password: {
        type: String,
        required: true
    }
})

const authenticate= mongoose.model('user',loginSchema);
export default authenticate;
