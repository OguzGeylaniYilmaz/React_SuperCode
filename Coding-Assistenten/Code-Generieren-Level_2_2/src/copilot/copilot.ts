function validatePassword(password: string): string {
  // Check if the password has at least 10 characters
  if (password.length < 10) {
    return "Password must be at least 10 characters long.";
  }

  // Check if the password contains at least one capital letter
  if (!/[A-Z]/.test(password)) {
    return "Password must contain at least one capital letter.";
  }

  // Check if the password contains at least one special character
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    return "Password must contain at least one special character.";
  }

  // Check if the password contains no spaces
  if (/\s/.test(password)) {
    return "Password must not contain spaces.";
  }

  // If all checks pass, the password is valid
  return "Password is valid.";
}

// Example usage:
console.log(validatePassword("Password123!")); // Output: "Password is valid."
console.log(validatePassword("short!")); // Output: "Password must be at least 10 characters long."
console.log(validatePassword("password123!")); // Output: "Password must contain at least one capital letter."
console.log(validatePassword("Password123")); // Output: "Password must contain at least one special character."
console.log(validatePassword("Password 123!")); // Output: "Password must not contain spaces."
