# Lab 13 - Password Checker

You will be writing your code in `sketch.js` within the main folder - not the `example/` folder.

Create a password strength checker:

- Create an input box for the user to type a password. It updates live (no button needed).

- Display a checklist of rules. Each rule is shown in **green** if the password passes it, and **red** if it doesn't:

  - At least 8 characters long

  - Contains at least one number

  - Contains at least one capital letter

  - Does **not** contain the word "password", in any capitalization

- If all four rules pass, display "Strong password!".

Hints:

- A character is a number if it is between "0" and "9"

- A character is a capital letter if it is between "A" and "Z"

Challenge:

- Add a fifth rule: contains at least one symbol (any character that is not a letter or number).

- `createInput("", "password")` creates an input that hides what is typed. Add a checkbox or button that shows the password.

Remember to:

- Update the header

- Include comments
