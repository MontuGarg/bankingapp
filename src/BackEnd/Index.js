const express=require("express");
const mongoose=require("mongoose");
const app=express();
const cors=require("cors");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
mongoose.connect("mongodb://127.0.0.1:27017/MP_Bank")
    .then(() => {
        console.log("Database Connected");
    })
    .catch((err) => {
        throw err;
    });

const getUsername=(first,last,number)=>{
    return first+last+number.substr(0,5);
}
const SchemaRegister = new mongoose.Schema({
    firstName: String,
    lastname: String,
    username: String,
    password: String,
    idProofType: String,
    idNumber: String
});

const User = mongoose.model("User", SchemaRegister);

app.post("/RegisterUser", async (req, res) => {
    const { firstName, lastname, password, idProofType, idNumber } = req.body;

    if (!firstName || !lastname || !password || !idProofType || !idNumber) {
        return res.status(400).send({ message: "All fields are required." });
    }

    const username = getUsername(firstName, lastname, idNumber);

    try {
        const isExist = await User.findOne({ username });

        if (!isExist) {
            const newUser = new User({
                firstName,
                lastname,
                username,
                password,
                idProofType,
                idNumber
            });

            await newUser.save();
            res.status(201).send({ message: `Your username is ${username}. Please note your username.` });
        } else {
            res.status(200).send({ message: `User already exists with the same details.` });
        }
    } catch (err) {
        console.error("Error saving user:", err);
        res.status(200).send({ message: "An error occurred while registering the user." });
    }
});
app.post("/CheckLogin", async (req, res) => {
    const { username,  password} = req.body;

    if (!password || !username ) {
        return res.status(200).send({ message: "All fields are required." });
    }
    try {
        const isExist = await User.findOne({ username });
        if (isExist) {
            if(isExist.password===password){
                 res.status(201).send({ message: `Success` });
            }else{
                res.status(200).send({ message: `Invalid username or password` });
            }
            
        } else {
            res.status(200).send({ message: `Invalid username or password` });
        }
    } catch (err) {
        console.error("Error saving user:", err);
        res.status(500).send({ message: "An error occurred while registering the user." });
    }
});


app.listen("8000",()=>{
    console.log("Listening on port 8000");
})