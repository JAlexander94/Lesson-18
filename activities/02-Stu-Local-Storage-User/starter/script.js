var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");
var signUpButton = document.querySelector("#sign-up");
var msgDiv = document.querySelector("#msg");
var userEmailSpan = document.querySelector("#user-email");
var userPasswordSpan = document.querySelector("#user-password");

renderLastRegistered();

function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute("class", type);
}

function renderLastRegistered() {
  // Fill in code here to retrieve the last email and password.
  const email = localStorage.getItem("email")
  const password = localStorage.getItem("password")
  // If they are null, return early from this function
  if(email===null || password===null){return}
  // Else set the text of the userEmailSpan and userPasswordSpan 
    userEmailSpan.textContent = email;
    userPasswordSpan.textContent = password;

  // to the corresponding values form local storage
  
}

signUpButton.addEventListener("click", function(event) {
  event.preventDefault();

  var email = document.querySelector("#email").value;
  var password = document.querySelector("#password").value;

  if (email === "") {
    displayMessage("error", "Email cannot be blank");
  } else if (password === "") {
    displayMessage("error", "Password cannot be blank");
  } else {
    displayMessage("success", "Registered successfully");
    localStorage.setItem("email",email)
    localStorage.setItem("password",password)
    renderLastRegistered(event)
  // Save email and password to localStorage and render the last registered.
  }
});
