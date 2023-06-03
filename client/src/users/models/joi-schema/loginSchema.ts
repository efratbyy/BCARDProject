import Joi from "joi";

const loginSchema = {
  email: Joi.string()
    .ruleset.pattern(/^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/) // email קביעת התבנית של
    .rule({ message: 'user "mail" mast be a valid mail' })
    // הודעת השגיאה שתופיע במידה והמשתמש לא הכניס אימייל לפי התבנית
    .required(),

  password: Joi.string()
    .ruleset.regex(
      // passwordx קביעת התבנית של
      /((?=.*\d{1})(?=.*[A-Z]{1})(?=.*[a-z]{1})(?=.*[!@#$%^&*-]{1}).{7,20})/
    )
    .rule({
      message:
        'user "password" must be at least seven characters long and contain an uppercase letter, a lowercase letter, a number and one of the following characters !@#$%^&*-',
    }) // הודעת השגיאה שתופיע במידה והמשתמש לא הכניס סיסמא לפי התבנית
    .required(),
};

export default loginSchema;
