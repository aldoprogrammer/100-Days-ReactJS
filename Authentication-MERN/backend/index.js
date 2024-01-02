const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');
const EmployeeModel = require('./models/Employee');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser')

const app = express();
app.use(express.json())
app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST"],
    credentials: true
}))
app.use(cookieParser())

mongoose.connect(yourmongop)

const verifyUser = (req, res, next) => {
    const token = req.cookies.token;
    if(!token) {
        return res.json("The token was not available")
    } else {
        jwt.verify(token, "jwt-secret-key", (err, decoded) => {
            if(err) return res.json("Token is wrong")
            next();
        })
    }
}

app.get('/home', verifyUser, (req, res) => {
    return res.json("Success");
})

app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await EmployeeModel.findOne({ email: email });

        if (user) {
            const passwordMatch = await bcrypt.compare(password, user.password);

            if (passwordMatch) {
                const token = jwt.sign({email: user.email}, "jwt-secret-key", {expiresIn: '1d'})
                res.cookie("token", token);
                res.json("Success Login");
            } else {
                res.json("Password is wrong");
            }
        } else {
            res.json("No account found with this email");
        }
    } catch (err) {
        console.error(err);
        res.status(500).json("Internal Server Error");
    }
});

app.post('/register', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const hash = await bcrypt.hash(password, 10);
        const employees = await EmployeeModel.create({ name, email, password: hash });
        res.json(employees);
    } catch (err) {
        console.error(err);
        res.status(500).json("Internal Server Error");
    }
});


app.listen(3001, () => {
    console.log("server is running");
})