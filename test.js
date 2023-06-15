// Check if user is logged in
window.onload = function() {
    if (localStorage.getItem("isLoggedIn")) {
      // User is logged in
      showLoggedInView();
    } else {
      // User is not logged in
      showLoggedOutView();
    }
  }
  
  // Login form submission
  document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Get username and password
    var username = document.getElementById("login-username").value;
    var password = document.getElementById("login-password").value;
    
    // Check if the user exists in LocalStorage
    var savedUser = JSON.parse(localStorage.getItem(username));
    if (savedUser && savedUser.password === password) {
      // Login successful
      localStorage.setItem("isLoggedIn", true);
      showLoggedInView();
    } else {
      // Login failed
      alert("Invalid username or password");
    }
  });
  
  // Register form submission
  document.getElementById("register-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Get username and password
    var username = document.getElementById("register-username").value;
    var password = document.getElementById("register-password").value;
    
    // Check if the user already exists in LocalStorage
    if (localStorage.getItem(username)) {
      alert("Username already exists");
    } else {
      // Save user to LocalStorage
      var user = {
        username: username,
        password: password
      };
      localStorage.setItem(username, JSON.stringify(user));
      alert("Registration successful");
      
      // Automatically log in the newly registered user
      localStorage.setItem("isLoggedIn", true);
      showLoggedInView();
    }
  });
  
  // Logout button click
  document.getElementById("logout-button").addEventListener("click", function() {
  });
    // Clear LocalStorage and log out
  