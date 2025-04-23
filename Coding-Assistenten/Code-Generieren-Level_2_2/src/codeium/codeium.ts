function validatePassword(password: string): string | null {
  const errors: string[] = [];

  // Check for at least 10 characters
  if (password.length < 10) {
    errors.push("Password must be at least 10 characters long");
  }

  // Check for at least one capital letter
  if (!/[A-Z]/.test(password)) {
    errors.push("Password must contain at least one capital letter");
  }

  // Check for at least one special character
  if (!/[^a-zA-Z0-9]/.test(password)) {
    errors.push("Password must contain at least one special character");
  }

  // Check for no spaces
  if (/\s/.test(password)) {
    errors.push("Password must not contain spaces");
  }

  // Return error message if any errors found
  if (errors.length > 0) {
    return errors.join("\n");
  }

  // Password is valid
  return null;
}

const password = "MyP@ssw0rd";
const errorMessage = validatePassword(password);

if (errorMessage) {
  console.error(errorMessage);
} else {
  console.log("Password is valid");
}
