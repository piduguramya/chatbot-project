const bcrypt = require("bcrypt");
const userModel = require("./tablemodule.js"); // Correct import

async function register(req) {
    return new Promise(async (resolve, reject) => {
        try {
            const { username, email, password } = req.body;

            if (!username || !email || !password) {
                return reject("Missing required fields: username, email, or password.");
            } 

            // Check if the username already exists
            const existingUser = await userModel.findOne({ username });                      

            if (existingUser) {
                return resolve("Username already exists.");
            }

            // Hash the password
            const hashedPassword = await bcrypt.hash(password, 10);
            // console.log(hashedPassword);
            

            // Create and save new user
            const newUser = new userModel({
                username,
                email,
                password: hashedPassword, // Store hashed password correctly
            });

            await newUser.save();

            resolve("User registered successfully.");
        } catch (error) {
            reject("Error processing registration: " + error.message);
        }
    });
}

module.exports = register;
