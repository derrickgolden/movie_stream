var bcrypt = require('bcryptjs');

async function hashCode() {
    const code = generateCode();
    const saltRounds = 10; // Cost factor
    const hashedCode = await bcrypt.hash(code, saltRounds);
    return {hashedCode, code};
};

function generateCode() {
    return Math.floor(100000 + Math.random() * 900000).toString();
};

module.exports ={
    hashCode,
};