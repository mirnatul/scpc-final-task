function generatePassword(length) {
    if (length < 6) {
        return "Password must contain at least 6 character"
    }
    const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+{[]}<>/?,.;:"
    let password = "";

    password += characters[Math.floor(Math.random() * (25 - 0 + 1) + 0)]
    password += characters[Math.floor(Math.random() * (51 - 26 + 1) + 26)]
    password += characters[Math.floor(Math.random() * (61 - 52 + 1) + 52)]
    password += characters[Math.floor(Math.random() * (87 - 62 + 1) + 62)]

    for (let i = 0; i < length - 4; i++) {
        password += characters[Math.floor(Math.random() * characters.length)];
    }
    const shuffledArray = password.split('').sort((a, b) => Math.random() - 0.5).join('');

    return shuffledArray;
}

console.log(generatePassword(8))
