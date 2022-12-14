# 03 JavaScript: Password Generator

## Your Task

This week's Challenge requires you to modify starter code to create an application that enables employees to generate random passwords based on criteria that they’ve selected. This app will run in the browser and will feature dynamically updated HTML and CSS powered by JavaScript code that you write. It will have a clean and polished, responsive user interface that adapts to multiple screen sizes.

The password can include special characters. If you’re unfamiliar with these, see this [list of password special characters](https://www.owasp.org/index.php/Password_special_characters) from the OWASP Foundation.

## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

## Mock-Up

The following image shows the web application's appearance and functionality:

![The Password Generator application displays a red button to "Generate Password".](./assets/images/03-javascript-homework-demo.png)

Works:

When 'Generate Password" is clicked, it presents a series of prompts for a password criteria like below:
a. The criteria for password generator are lowercase, uppercase, numeric, and/or special characters.
b. The criteria for password generator are lowercase, uppercase, numeric, and/or special characters.
After clicking 'OK', the page takes to select password criteria. It gives options like lowercase, uppercase, numeric and special character
After selecting the criteria, it asks for password lenght which is between 8 and 128.
Once all the criteria is fulfilled, it will generate a password according to the selection we have made. 

Below are few examples as Screenshots:

Displays Generate Password:
![Displays Generate Password](./assets/images/Generate_Password.jpg)



Password Criteria Selection:
![Password Criteria Selection](./assets/images/Password_Criteria_Selection.jpg)



Password Length Selection:
![Password Length Selection](./assets/images/Password_Length_Selection.jpg)


Displays a generated password based on our selection:
![Displays a generated password based on our selection](./assets/images/Generated_Password_25_Long.jpg)


 
 Contribution / Reference:
 1. https://owasp.org/www-community/password-special-characters - Password

 2. https://www.w3schools.com/js/js_scope.asp - Global Variables

 3. https://www.w3schools.com/jsref/met_win_alert.asp - Window Alert Method

 4. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice - Array Slice

 5. https://stackoverflow.com/questions/66649409/validate-duplicate-data-entry-in-array-javascript - duped entries

 6. https://stackoverflow.com/questions/18804184/string-length-validation-in-javascript - string length validation

 7. https://www.w3schools.com/howto/howto_js_toggle_password.asp - Password visibility

 8. YOUTUBE VIDEOS

Links to the Project

The project was uploaded to GitHub at the following repository: : https://github.com/Akshatha2022/JsPwGenerator

 You can access the deployed application with the GitHup Pages link: https://akshatha2022.github.io/JsPwGenerator/
