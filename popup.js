document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('signUpButton').addEventListener('click', function () {
    const screenWidth = screen.availWidth;
    const screenHeight = screen.availHeight;
    const popupWidth = 400;  // Adjust the width as needed
    const popupHeight = 500; // Adjust the height as needed
    const left = (screenWidth - popupWidth) / 2;
    const top = (screenHeight - popupHeight) / 2;
    chrome.windows.create({
      url: 'signUp.html',
      type: 'popup',
      width: popupWidth,
      height: popupHeight,
      left: left + 200,
      top: top - 200,
    });
  });
  document.getElementById('signInButton').addEventListener('click', function () {
    const screenWidth = screen.availWidth;
    const screenHeight = screen.availHeight;
    const popupWidth = 400;  // Adjust the width as needed
    const popupHeight = 500; // Adjust the height as needed
    const left = (screenWidth - popupWidth) / 2;
    const top = (screenHeight - popupHeight) / 2;
    chrome.windows.create({
      url: 'signin.html',
      type: 'popup',
      width: popupWidth,
      height: popupHeight,
      left: left + 200,
      top: top - 200,
    });
  });
});