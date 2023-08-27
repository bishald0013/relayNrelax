import bcrypt, {genSalt} from 'bcrypt'
import jwt from 'jsonwebtoken'
import UserModel from "../models/userModel.js";

export default class UserService {

    saveUser = async (data) =>{
        
        const { email, password, confirmPassword, userName, phoneNumber, alternateNumber } = data;

        try {
            
            const existing_user = await UserModel.findOne({email: email})

            if(existing_user) throw new Error(`User with email: ${email} already exists`);
            if(password !== confirmPassword) throw new Error(`Password and confirmPassword are not the same`);
            if(phoneNumber === alternateNumber) throw new Error(`Alternate number must be different from phoneNumber`);

            const salt = await bcrypt.genSalt(10)
            const hashPassword = await bcrypt.hash(password, salt);

            const newUser = new UserModel({
                name: userName,
                phone_number: phoneNumber,
                alternate_number: alternateNumber,
                email: email,
                password: hashPassword
            })

            const saved_user = await newUser.save();
            if(!saved_user) throw new Error(`Something went wrong saving user please try again`);
            const token = jwt.sign({userId: saved_user._id}, process.env.SECRET_KEY, {expiresIn: '10d'})

            return {status: true, data: saved_user, token: token}

        } catch (error) {
            return {status: false, message: error.message}
        }
    }

    loginUser = async (data) => {
        try {
            const {email, password} = data

            if(!email) throw new Error ("Please enter email address for login")
            if(!password) throw new Error ("Please enter email password for login")
            
            const user = await UserModel.findOne({email: email})

            if(!user) throw new Error ("User not found")

            const compare_password = await bcrypt.compare(password, user.password)
            if(compare_password === false) throw new Error ("Password mismatch")

            const token  = jwt.sign({userId : user._id} , process.env.SECRET_KEY, {expiresIn: '10d'})

            return {status: true, token: token, message: "user is now logged in"}

        } catch (error) {
            return {status: false, message: error.message}
        }
    }

    updateUserEmail = async (data, userData) => {
        try {
            const {email} = data;

            if(email === userData.email) throw new Error ("Email already in use ");
            const saved_email = await UserModel.findOne({email: email})
            if(saved_email) throw new Error ("Email already exists");
            const updated_email = await UserModel.findByIdAndUpdate(userData._id, {$set: {email: email}})
            const updated_user = await UserModel.findOne({email: email})

            if(updated_user.email === email) return {status: true, message: "Email address updated successfully"}

            return {status: false, message: "Fail to update email address"}

        } catch (error) {
            return {status: false, message: error.message}
        }
    }
    
    updatePhoneNumber = async (data, userData) => {
        try {
            const user = await UserModel.findOne({email: userData.email})

            if(user.phone_number == data.phone_number) throw new Error ("Phone number already saved")
            await UserModel.findByIdAndUpdate(userData._id, {$set: {phone_number: data.phone_number}})
            const updated_user = await UserModel.findOne({email: userData.email})
            if(updated_user.phone_number == data.phone_number) return {status: true, message: "Phone number updated successfully"}
            return {status: false, message: 'fail to update phone number'}

        } catch (error) {
            return {status: false, message: error.message}
        }
    }

    getAllUser = async () =>{
        try {
            const users = await UserModel.find();
            if(!users) throw new Error ("User not found");
            return users
        } catch (error) {
            return {status: false, message: error.message}
        }
    }

    
}