# Lab 13 - Password Checker

You will be writing your code in `sketch.js` within the main folder - not the `example/` folder.

[Create a password strength checker](https://openprocessing.org/sketch/2760859/embed/?plusEmbedHash=7c579956&userID=175929&plusEmbedTitle=true&show=sketch):

- A template has been provided.  No need to include a button - have the messages appear/disappear as the password is typed.

- Display error messages if the following rules are not followed:

  - At least 8 characters long

  - Contains at least one uppercase letter

  - Contains at least one lowercase letter

  - Does **not** contain the word "password"

- If all four rules pass, display "Password Accepted".


Challenge:

- Add a fifth rule: contains at least one number.  Remember that `>` and `<` works with strings... but it's text, not numbers! 

- `createInput("", "password")` creates an input that hides what is typed. Add a checkbox or button that shows the password.

Remember to:

- Update the header

- Include comments
