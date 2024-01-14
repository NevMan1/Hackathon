let email = document.getElementById('email');
let password = document.getElementById('password');
let loginButton = document.getElementById('login');
let signupButton = document.getElementById('signup');
let logoutButton = document.getElementById('logout');
let show = document.getElementById('discriber');

loginButton.addEventListener('click', function () {
  login();
});

signupButton.addEventListener('click', function () {
  signup();
});

logoutButton.addEventListener('click', function () {
  logout();
});

function login() {
  let e = email.value;
  let p = password.value;
  firebase.auth().signInWithEmailAndPassword(e, p)
    .catch((error) => {
      console.error("Login Error:", error.code, error.message);
    });
}

function signup() {
  let e = email.value;
  let p = password.value;
  firebase.auth().createUserWithEmailAndPassword(e, p)
    .then((userCredential) => {
      // Successfully created user
      let user = userCredential.user;
      show.innerHTML = "Account created and logged in";
    })
    .catch((error) => {
      console.error("Sign Up Error:", error.code, error.message);
    });
}

function logout() {
  firebase.auth().signOut().then(() => {
    // Sign-out successful
    show.innerHTML = "Logged Out";
  }).catch((error) => {
    console.error("Logout Error:", error.code, error.message);
  });
}

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    show.innerHTML = "Logged In";
  } else {
    show.innerHTML = "User is not defined";
  }
});
