import mongoose from "mongoose";

const userScheme = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
}, {minimize: false})

const userModel = mongoose.models.user || mongoose.model("user", userScheme)

export default userModel