function generatePassword(length = 12) {
    
    const ascii_letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const digits = "0123456789"
    let result = ""
    const characters = ascii_letters + digits + "_";
    // added variables, ascii_letters are every letter, digits are each number, let result is what the password is generated in, and characters is all digits and letters.
    
    
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return(result);
    // this creates a for loop, in where it goes through each character, and uses Math.random, charAt, and Math.floor to use the length to generate a 12 character password.
}

module.exports = generatePassword;