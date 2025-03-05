const bcrypt = require("bcrypt");
const userModel = require("./tablemodule.js"); // ✅ Correct import

async function login(req) {
    return new Promise(async (resolve, reject) => {
        console.log(req.body);
        
        try {
            const { username, password } = req.body;

            if (!username || !password) {
                return reject("Username and password are required.");
            }

            // ✅ Find user in MongoDB
            const user = await userModel.findOne({ username });

            if (!user) {
                return reject("User not found. Please register first."); // ✅ No status, only message
            }

            // ✅ Check if password exists in DB
            if (!user.password) {
                return reject("Stored password is missing. Contact support."); // ✅ If password field is missing
            }

            // ✅ Correct password field (was 'passwordd', should be 'password')
            const isMatch = await bcrypt.compare(password, user.password);

            if (!isMatch) {
                return reject("Invalid credentials.");
            }

            resolve("Login successful.");
        } catch (error) {
            reject("Error during login: " + error.message);
        }
    });
}

module.exports = login;
