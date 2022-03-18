// Assignment code here
var generateBtn = document.querySelector("#generate");

var lowercase = "abcdefghijklmnopqrstuvwxyz"
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var special = "~!@#$%^&*()-_=+[{]}\|;:,<.>/?"
var numeric = "123456789"
var item1input;
var passwordArray = [];
var randompassword = "";

var parameters = function() {
  
item1()
Outputs()
writePassword()


}
//Generate
generateBtn.addEventListener("click", parameters);

var item1= function() {
    
      // ask user how many characters they want
         item1input = prompt("How many characters would you like your password to contain?");
         
     console.log(item1input)
      // if player picks between 7 and 128 continue, if not prompt them again
      if (item1input <= 7 || item1input > 128) {
        // prompt them again
        alert("Your password length needs to be between 8 and 128 characters");
        item1()
      }
    }

var Outputs= function() {
    
      passwordArray.push(lowercase)
      // ask user if they want special characters
      var item2input = confirm("Click OK to confirm including special characters");
          if (item2input){
            passwordArray.push(special)
          }
    // ask user if they want numeric characters
      var item3input = confirm("Click OK to confirm including numeric characters");
      if (item3input){
        passwordArray.push(numeric)
      }
    // ask user if they want uppercase characters
      var item4input = confirm("Click OK to confirm including uppercase characters");
      if (item4input){
        passwordArray.push(uppercase)     
    }
  
  }

// Write password to the #password input
var writePassword = function() {

for (var i = 0; i < item1input; i++) {

  var randomizer = passwordArray[Math.floor(Math.random() * passwordArray.length)];
  var randomchar = randomizer.charAt(Math.floor(Math.random() * randomizer.length))

 randompassword = randompassword + randomchar;
}
  var passwordText = document.querySelector("#password");

 passwordText.value = randompassword;

// reset password to 0 for next run
 randompassword=""

}



// Generate password based on inputs


