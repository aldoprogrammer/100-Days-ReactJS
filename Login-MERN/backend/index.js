const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express();
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb+srv://aldobesma:kS9023iHkXNNied3@cluster0.r8sr0za.mongodb.net/login')

const UserSchema = new mongoose.Schema({
    email: String,
    password: String
})

const UserModel = mongoose.model('users', UserSchema)
app.post("/login", (req, res) => {
    const {email, password} = req.body;
    UserModel.findOne({email: email})
    .then(user => {
        if(user) {
            if(user.password === password) {
                res.json("Login Succesfully")
            }
            else {
                res.json("The password is inccorect")
            }
        }
        else {
            res.json("There is no account with this email")
        }
    })
})

app.listen(3001, () => {
    console.log("Server is running");
})