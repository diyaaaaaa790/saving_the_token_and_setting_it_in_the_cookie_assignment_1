const jwt = require('jsonwebtoken');

// Data you want to include in the token
const userData = {
    id: 1,
    username: "kalvian_user"
};

// Secret key (keep this safe!)
const secretKey = 'kalviSecret123';

// 1. Encrypt: Create the JWT token
const token = jwt.sign(userData, secretKey, { expiresIn: '1h' });
console.log("Encrypted Token:", token);

// 2. Decrypt: Verify and decode the token
try {
    const decoded = jwt.verify(token, secretKey);
    console.log("Decrypted Data:", decoded);
    console.log("Success");
} catch (err) {
    console.error("Token verification failed!", err.message);
}
