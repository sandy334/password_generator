class PasswordGenerator {
    constructor(length) {
        this.length = length;
        this.uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        this.lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
        this.specialChars = '!@#$%^&*()-_+=<>?';
    }

    generatePassword() {
        let password = '';
        let hasUppercase = false;
        let hasSpecialChar = false;

        for (let i = 0; i < this.length; i++) {
            const randomType = Math.floor(Math.random() * 3);

            switch (randomType) {
                case 0:
                    password += this.uppercaseChars[Math.floor(Math.random() * this.uppercaseChars.length)];
                    hasUppercase = true;
                    break;
                case 1:
                    password += this.lowercaseChars[Math.floor(Math.random() * this.lowercaseChars.length)];
                    break;
                case 2:
                    password += this.specialChars[Math.floor(Math.random() * this.specialChars.length)];
                    hasSpecialChar = true;
                    break;
            }
        }

        // Ensure at least one uppercase letter and one special character
        if (!hasUppercase || !hasSpecialChar) {
            const randomIndex = Math.floor(Math.random() * this.length);
            if (!hasUppercase) {
                password = password.substring(0, randomIndex) + 
                           this.uppercaseChars[Math.floor(Math.random() * this.uppercaseChars.length)] + 
                           password.substring(randomIndex + 1);
            }
            if (!hasSpecialChar) {
                password = password.substring(0, randomIndex) + 
                           this.specialChars[Math.floor(Math.random() * this.specialChars.length)] + 
                           password.substring(randomIndex + 1);
            }
        }

        return password;
    }
}

const generateBtn = document.getElementById('generateBtn');
const passwordOutput = document.getElementById('passwordOutput');

generateBtn.addEventListener('click', () => {
    const passwordLength = document.getElementById('passwordLength').value;
    const passwordGenerator = new PasswordGenerator(passwordLength);
    const generatedPassword = passwordGenerator.generatePassword();
    passwordOutput.value = generatedPassword;
});
