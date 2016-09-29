var validator = require("email-validator"); 

export class User {
    firstName: string;
    lastName: string;
    companyName: string; 
    userid: string;
    email: string;
    primaryPhone: string;
    jobTitle: string;
    passcode: string; 
    isValidEmail() { 
        return validator.validate(this.email); 
    } 
} 
