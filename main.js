setupEventListeners();

function setupEventListeners() {
  let email = document.getElementById('email');
  let password = document.getElementById('password');
  let loginButton = document.getElementById('login');
  let signupButton = document.getElementById('signup');
  let logoutButton = document.getElementById('logout');
  let logoutButton2 = document.getElementById('logout2');
  let homeButton = document.getElementById("home");

  if (loginButton) {
    loginButton.addEventListener('click', function () {
      login();
    });
  }

  if (signupButton) {
    signupButton.addEventListener('click', function () {
      signup();
    });
  }

  if (logoutButton) {
    logoutButton.addEventListener('click', function () {
      logout();
    });
  }
  if (logoutButton2) {
    logoutButton2.addEventListener('click', function () {
      logout();
    });
  }
  if (homeButton) {
    homeButton.addEventListener('click', function () {
      console.log('Logout button clicked!');
      window.open('practice.html', '_blank');
    });
  }
}

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
    })
    .catch((error) => {
      console.error("Sign Up Error:", error.code, error.message);
    });
}

function logout() {
  firebase.auth().signOut().then(() => {
    // Sign-out successful
  }).catch((error) => {
    console.error("Logout Error:", error.code, error.message);
  });
  console.log('idk please work');
}

firebase.auth().onAuthStateChanged((user) => {
  const popupContainer = document.getElementById('popup-container');
  
  if (user) {
    fetch('loggedin.html')
      .then(response => response.text())
      .then(html => {
        popupContainer.innerHTML = html;
        setupEventListeners();
      })
      .catch(error => {
        console.error('Error loading loggedin.html:', error);
      });
  } else {
    fetch('main.html')  
      .then(response => response.text())
      .then(html => {
        popupContainer.innerHTML = html;
        setupEventListeners();
      })
      .catch(error => {
        console.error('Error loading main.html:', error);
      });
  }
});
