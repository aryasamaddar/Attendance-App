import otpGenerator from "otp-generator";

let otp = otpGenerator.generate(6, {
  digits: true,
  upperCaseAlphabets: true,
  specialChars: false,
  lowerCaseAlphabets: false
});

console.log(otp);

