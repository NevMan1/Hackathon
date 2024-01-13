document.getElementById('practiceButton').addEventListener('click', function () {
    chrome.tabs.create({ url: 'practice.html' });
  });