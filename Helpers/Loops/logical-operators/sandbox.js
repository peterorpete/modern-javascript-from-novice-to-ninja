// else if statements
// && = and
// || = or
const password = "password2223232";

if (password.length >= 12 && password.includes("@")) {
 console.log("that password is very strong");
} else if (password.length >= 8 || password.includes("@")) {
 console.log("that password is long enough");
} else {
 console.log("that password is not long enough");
}
