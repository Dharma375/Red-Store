function login() {
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  // Dummy credentials for demo
  const validUser = "user";
  const validPass = "1234";

  if (username === validUser && password === validPass) {
    alert("Login successful!");
    localStorage.setItem("loggedIn", "true");
    window.location.href = "index.html"; // Redirect to home
  } else {
    alert("Invalid credentials! Try user / 1234");
  }
}
