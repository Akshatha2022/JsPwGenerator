// Global Variables
var arraySplit = ""; // Used to translate input array back to the user as a string with slice
var exitApplication = false; // on/off switch for running the app
var userInput = ""; // Important - will be used to generate password based on criteria
var finalPassword = ""; // Important - used as a variable to store temporatly a random passoword.
var displayPassword = ""; // Impoprtant- used to display the final password on the text area of the HTML element.


// Mutlidimenional object to use later for criteria and random generating strings.
var pCriteria = {
    lowercase: { indexNumber: 0 , criteria: "abcdefghijklmnopqrstuvwxyz"
    },
    uppercase: { indexNumber: 1, criteria: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    },
    numeric: { indexNumber: 2, criteria: "0123456789"
    },
      symbols: { indexNumber: 3, criteria: "!\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~"
    }
  }
  
 // Call function to generate password criterias and adoption to our code
var generatePassword = function() {


    //initilaize all global variables
    arraySplit = ""; // Used to translate input array back to the user as a string with slice
    exitApplication = false; // on/off switch for running the app
    userInput = ""; // Important - will be used to generate password based on criteria
    finalPassword = ""; // Important - used as a variable to store temporatly a random passoword.
    displayPassword = ""; // Impoprtant- used to display the final password on the text area of the HTML element.
 
   // Alert user for criteria
   window.alert("The criteria for password generator are lowercase, uppercase, numeric, and/or special characters.");
 
   var validInput = true;
 
 
 
   while(validInput) {
     // Take user input
     userInput = window.prompt("Select criteria for password (you can select more than one) (use space): 1=lowercase 2=uppercase 3=numeric 4=special characters.\n");
     if (!userInput) {
       window.alert("If you wish to close the application, please close this password generator tab.")
       generatePassword();
       } else if (userInput) {
                 // Continue with the application. User put a valid input to try to split to array. We can now continue to slice to show the output to user
     userInput = userInput.split(" ");
     // Take the userInput array and slice it from positon 0 to the lenght of the array in order to display it back to the user as string.
     arraySplit = userInput.slice(0,userInput.length);
   
     window.alert("You have selected: " + arraySplit);
     // We no longer need to enter the while input.
     validInput = false;
       
     // Create a for loop to iterate the user input to determine if valid criteria input passed.
     for (var i = 0; i < userInput.length; i++) {
       // Take one item/index from the user input and and moved to an integer for our switch case.
       var inputCriteria = userInput[i];
       // Convert this output into integer for further validation
       var inputCriteriaInteger = parseInt(inputCriteria);
       // Switch case with fall through logic to arrive at conclusions
       switch(inputCriteriaInteger) { // fall through takes care of at least one option is selected.
         case 1:
         case 2:
         case 3:
         case 4:
           //Our array is clean every time we fall through here. We then break to check the next index based on userInput.lenght
           break;
         default: // Anything else that is not our case 1-4 as integers (catch non integers here)
           if (!inputCriteriaInteger) { // We are catching Nulls NaN etc. We will divert it for a !inputCriteriaInteger conditional statement.
             window.alert("Please select a criteria using numbers and only from 1-4 seprated by one space.\nRestarting application");
             generatePassword(); // Recursion back to our function to start the criteria selection again.
           }
           else { // If not !inputCriteriaInteger means that we have non integers here.
             window.alert(" Please select a criteria using numbers and only from 1-4 seprated by space.\n\n" + "User input: " + inputCriteria + " is invalid");
             generatePassword(); // Recursion back to our function to start the criteria selection again.
           } 
       }
     }

     function passLenght () { // This functions validate the user input for lenght of characters from 8-128

        // Ask user for lenght of password.
        window.alert("How long do you want your password to be from 8-128 characters.\n E.g 20");
        var pLenght = parseInt(window.prompt("Please enter lenght")); // Convert to ingteger to check valid input.
        if (pLenght < 8 || pLenght > 128) {
          
          window.alert("Please enter a valid number between 8-128");
          passLenght();
      
        } else if (!pLenght) { // If null or Nan we will send the user back to the passLenght() function.
          window.alert("Please enter a valid number between 8-128")
          passLenght(); // Recurcion back to our function the get lenght.
        } else {
          window.alert("You have entered a valid lenght of: " + pLenght + "\n Password will now be generated");
          return pLenght; // We have a valid lengh, lets return our pLenght value.
        }
      }