import mongoose from "mongoose"

const userSchema = mongoose.Schema({
    name: {type: String, require: "User name is require"},
    phone_number: {type: String, require: "Phone number is require"},
    alternate_number: {type: String, require: "Alternate number is require"},
    email: {type: String, require: "Email id is require"},
    password: {type: String, require: true},
})

const UserModel = mongoose.model("User", userSchema)
export default UserModel